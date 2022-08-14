(function () {
    //Datastructure Listing
    var output= [];
    var callStack=[];
    var frmToFunName = {};
    var funIDToDecl = {};
    var scriptSet = []

    //Variable Listing
    var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
    var objGetPrototypeOf = Object.getPrototypeOf;
    
    var funName;
    var SPECIAL_PROP_SID = J$.Constants.SPECIAL_PROP_SID;
    var SPECIAL_PROP_IID = J$.Constants.SPECIAL_PROP_IID;
    var isBrowser = J$.Constants.isBrowser;
    var ifNative="";
    var scriptName="";
    var avail = false;
    var format = /(?!\()(\S+\.js)\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi;

    function getValue(v) {
        var type = typeof v;
        if (v!== null) {
            try{
                var shadowObj = J$.smemory.getShadowObjectOfObject(v);
                var shadowId = J$.smemory.getIDFromShadowObjectOrFrame(shadowObj)
                if (type ==='function'){
                        ifNative = isNative(v)? "Nat" : "Non"
                        return "Fun"+ifNative+":"+shadowId;

                } else if (type === 'object'){
                        return "Obj"+shadowId;
                }
            }catch(e){
                console.log("Shadowing error: " +e)
                return;
            }
            
        }
    }
    function getPropSafe(base, prop){
        if(base === null || base === undefined){
          return undefined;
        }
        return base[prop];
      }
    function getFrameID(name) {
            return "Frm"+J$.smemory.getIDFromShadowObjectOrFrame(J$.smemory.getShadowFrame(name));
        }
    function getCurrentFrameID() {
            return "Frm"+J$.smemory.getIDFromShadowObjectOrFrame(J$.smemory.getCurrentFrame());
        }
    function addToTrace(typ, funName, identity, loc, others) {
        var newObj={}
        newObj.typ = typ;
        newObj.funName = funName;
        newObj.identity = identity;
        newObj.loc = loc;
        if (typ=="InvokeReturn"){
            newObj.ret = others;
        }
        else if (typ=="Get" || typ=="Getter"){
            newObj.from = others[0];
            newObj.comp = others[1];
        }
        else if (typ=="LocRead" || typ=="LexRead"){
            newObj.from = others[0];
            newObj.curr = others[1];
            newObj.eloc = others[2]
        }
        else if (typ=="Write" || typ=="Declare"){
            newObj.to = others;
        }
        else if (typ=="Put" || typ=="Setter"){
            newObj.to = others[0];
            newObj.to = others[1];
        }

        output.push(newObj)
      }
    function isNative(input){
        if(input.toString() !== undefined){
            return input.toString().indexOf('[native code]') > -1 || input.toString().indexOf('[object ') === 0
        }
    }
    /**
     * @desc Given an object and property, it returns if the property is a getter
     * @param {object} obj - Base object
     * @param {string} prop - Property
     * @returns {string} desc - The descriptor for the property
     */
    function getPropertyDescriptor(o , prop ) {
            var t = o;
            while (t != null) {
                var desc = objGetOwnPropDesc(t, prop);
                if (desc) {
                    return desc;
                }
                t = objGetPrototypeOf(t);
            }
            
            return null;
        }
    /**
     * @desc Given an object and property, it identifies if the property is a getter
     * @param {object} obj - Base object
     * @param {string} prop - Property
     * @returns {boolean} - True/False identicating if getter or not
     */
    function isGetter( obj, prop){
            var desc = getPropertyDescriptor(obj,prop);
            return desc && (desc.get !== undefined);
        }
    /**
     * @desc Given an object and property, it identifies if the property is a setter
     * @param {object} obj - Base object
     * @param {string} prop - Property
     * @returns {boolean} - True/False identicating if setter or not
     */
    function isSetter( obj, prop){
            var desc = getPropertyDescriptor(obj,prop);
            return desc && (desc.set !== undefined);
        }
    /**
     * @desc Given a global instruction identifier, it returns a string containing 
     * the script name, begin and end line numbers and column 
     * Example: (ScriptName@beginLineNumber:beginColumnNumber:endLineNumber:endColumnNumber)
     * @param {number} giid - Static unique instruction identifier of this callback
     * @returns {string} final - The customised location of an instruction identifier
     */
    function getLoc(from,giid) {
            //locations for native functions, returning string None
            if(giid =="undefined:undefined"){
                return "None";
            }
            loc = J$.iidToLocation(giid);
            var locIid = "";
            try{
                    locIid = format.exec(loc);
                    format.lastIndex = 0;
                    return locIid[1].replace("(",":")+"@"+locIid[2];
            }
                    catch(e){
                            console.log("Unsupported format: " +from + ","+ loc)
                            return;
                    }
    }

    J$.analysis = {
            putField : function (iid, base, offset, val, isComputed, isOpAssign) {
                if(isSetter(base,offset)){
                    var desc = getPropertyDescriptor(base,offset);
                    funName = desc.set.name? desc.set.name: "anon"
                    funId= getValue(desc.set)
                    addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),"set")
                    addToTrace("InvokeSetter",funName,funId,getLoc("put",J$.getGlobalIID(iid)))
                }else if (typeof val== 'function'){
                        funName = val.name? val.name: "anon"
                        funId= getValue(val)
                        addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),String(offset))
                    }
            },
            getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                if(isGetter(base,offset)){
                    var desc = getPropertyDescriptor(base,offset);
                    funName = desc.get.name? desc.get.name: "anon"
                    funId=getValue(desc.get)
                    addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),"get")
                    addToTrace("InvokeGetter",funName,funId,getLoc("get",J$.getGlobalIID(iid)))
                }else if (typeof val== 'function'){
                        funName = val.name? val.name: "anon"
                        funId= getValue(val)
                        addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),String(offset))     

                }
            },
            declare: function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
                if(name==="arguments" && isArgument && typeof val== 'object' && val!=null){
                    for (var [key,value] of Object.entries(val)){
                        if(typeof value == "function"){
                            funName= value.name ? value.name : "anon";
                            funId= getValue(value)
                            addToTrace("Put",funName, funId,getLoc("declare",J$.getGlobalIID(iid)),key.toString(),false)
                        }
                    }
                }
                else if((typeof val)=== 'function'){
                    funName = val.name? val.name : "anon"
                    var funId = getValue(val)
                    addToTrace("Declare",funName,funId,getLoc("declare",J$.getGlobalIID(iid)),getFrameID(name)+":"+name)

                }
            },
            literal: function (iid, val, hasGetterSetter) {
                if(typeof val== 'function'){
                    funName = val.name? val.name : "anon"
                    funId = getValue(val)
                    addToTrace("Create",funName,funId,getLoc("literal",J$.getGlobalIID(iid)))
                    funIDToDecl[funId]= getLoc("create",callStack[callStack.length-1])

                }
                else if(typeof val== 'object' && val!=null){
                    if(Array.isArray(val)){
                        for (var key in val){
                            if(typeof val[key] =="function"){
                                funName= val[key].name ? val[key].name : "anon";
                                funId= getValue(val[key])
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),key.toString(),false)
                            }
                        }
                    }
                    else{
                        for (var [key,value] of Object.entries(val)){
                                //new to handle puts of getters/setters
                                // || isGetter(val,key) || isSetter(val,key) 
                                if(typeof value == "function"){
                                    funName= value.name ? value.name : "anon";
                                    funId= getValue(value)
                                    addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),key.toString(),false)
                                }
                            }
                    }
                }
            },
            functionEnter: function(iid, f, dis, args){
                    var giid = J$.getGlobalIID(iid);
                    var frm= getCurrentFrameID();
                    //console.log("Enter",iid,f.name,frm)
                    var funName = f.name 
                    var funId = getValue(f)
                    if(funName === ""){
                        frmToFunName[frm] = getLoc("fenter1",J$.getGlobalIID(iid))
                        
                    }else{
                        if (callStack.length === 0) {
                            frmToFunName[frm] = "system"+"/"+funName;
                        }else{
                            frmToFunName[frm] =  funIDToDecl[funId]+"/"+funName
                        }
                    }
                    callStack.push(giid);
            },
            functionExit: function (iid, returnVal, wrappedExceptionVal){
                    callStack.pop();
            },
            scriptEnter: function (iid, instrumentedFileName, originalFileName) {
                    var frm= getCurrentFrameID();
                    var giid = J$.getGlobalIID(iid);
                    var funName = originalFileName
                    frmToFunName[frm] = funName
                    callStack.push(giid);
                    //new to resolve eval/evalIndirect issues
                    scriptName=funName;
                    //scriptSet.push(scriptName)
                    scriptSet.push(frm)
            },
            scriptExit: function (iid, wrappedExceptionVal) {
                    callStack.pop();
            },
        
            invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
                if(isNative(f) && f===Array.prototype.push){
                    for (var [key,value] of Object.entries(args)){
                        if(typeof value == "function"){
                            funName= value.name ? value.name : "anon";
                            funId= getValue(value)
                            var index = (base.length+Number(key)).toString()
                            addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),index,false)

                        }
                    }
                }
                if(isNative(f) && f===Array.prototype.shift){
                    for (var key in base){
                        if(typeof base[key] =="function"){
                            funName= base[key].name ? base[key].name : "anon";
                            funId= getValue(base[key])
                            var indx = (Number(key) - 1).toString()
                            addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),indx,false)

                        }
                    }
                }
                if(isNative(f) && f===Array.prototype.unshift){
                    for (var [key,value] of Object.entries(args)){
                        if(typeof value =="function"){
                            funName= value.name ? value.name : "anon";
                            funId= getValue(value)
                            addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),key.toString(),false)

                        }
                    }
                    for (var key in base){
                        if(typeof base[key] =="function"){
                            funName= base[key].name ? base[key].name : "anon";
                            funId= getValue(base[key])
                            var indx = (Number(key) + args.length).toString()
                            addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),indx,false)

                        }
                    }
                }
                var funName = f.name 
                if (isNative(f) && (f===Function.prototype.apply || f===Function.prototype.call)){
                    funName = base.name? base.name : "anon"
                    funId= getValue(base,SPECIAL_PROP_IID,SPECIAL_PROP_SID)
                }
                else{
                    funName = f.name? f.name : "anon"
                    funId= getValue(f,SPECIAL_PROP_IID,SPECIAL_PROP_SID)
                }
                addToTrace("InvokeCall",funName,funId,getLoc("invkcll",J$.getGlobalIID(iid)))
            },
            invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
                
                if (isNative(f)  && (f===Function.prototype.apply || f===Function.prototype.call)){
                    funName = base.name? base.name : "anon"
                    funId= getValue(base)
                    
                }
                else{
                    funName = f.name? f.name : "anon"
                    funId= getValue(f)
                }
                var list=null;
                if (typeof result=="function"){
                        retName = result.name ? result.name : "anon";
                        retId = getValue(result)
                        retLoc = getLoc("invkfun",functionSid+":"+functionIid);
                        retLoc= retLoc==="None"?getLoc("",getPropSafe(base, SPECIAL_PROP_SID)+":"+getPropSafe(base, SPECIAL_PROP_IID)):retLoc;
                    var obj = {
                        "retId" : retId,
                        "retName" : retName,
                        "retLoc" : retLoc              
                    };
                    if(list==null){
                        list=[];
                        list.push(obj);}
                }
                addToTrace("InvokeReturn",funName,funId,getLoc("invkretrn",J$.getGlobalIID(iid)),list)
                if(isNative(f) && f===Array.prototype.pop){
                    var indx = (base.length).toString()
                    if(typeof result =="function"){
                        funName = result.name ? result.name : "anon";
                        funId = getValue(result)
                        addToTrace("Get",funName, funId, getLoc("invkretrn",J$.getGlobalIID(iid)),indx,false)

                    }
                }
            
            },
            read: function (iid, name, val, isGlobal, isScriptLocal) {
                if(typeof val== 'function'){
                    
                    funName = val.name? val.name : "anon"
                    funId = getValue(val)
                    //new to model variable uses inside eval/evalIndirect
                    //console.log("here",name,getFrameID(name), getLoc("with",J$.getGlobalIID(iid)))
                    if (frmToFunName[getFrameID(name)] && !frmToFunName[getFrameID(name)].startsWith("eval") && scriptSet.includes(getFrameID(name))){
                    //if(scriptSet.includes(frmToFunName[getFrameID(name)])){
                        addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,"Global",getLoc("read",callStack[callStack.length-1])])
                    }
                    else if(getFrameID(name)!==getCurrentFrameID()){
                            addToTrace("LexRead",funName,funId,frmToFunName[getFrameID(name)]==undefined?"None":frmToFunName[getFrameID(name)],[getFrameID(name)+":"+name,getCurrentFrameID(),getLoc("read",callStack[callStack.length-1])])
                    }else{
                            addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,getCurrentFrameID(),getLoc("read",callStack[callStack.length-1])])
                    }

                }
            },
            write: function (iid, name, val, lhs, isGlobal, isScriptLocal) {
                if (typeof val == 'function' ){
                    funName = val.name? val.name : "anon"
                    funId = getValue(val)
                    addToTrace("Write",funName,funId,getLoc("write",J$.getGlobalIID(iid)),getFrameID(name)+":"+name) //temp frmToFunName[getFrameID(name)]
                }
            },
            _return: function (iid, val) {
                if (typeof val == 'function' ){
                    funName = val.name? val.name : "anon"
                    funId = getValue(val)
                    addToTrace("Return",funName, funId,getLoc("return",J$.getGlobalIID(iid)))
                }
            },
            _with: function (iid, val) {
                if(typeof val== 'object' && val!=null){
                    for (var [key,value] of Object.entries(val)){
                        if(typeof value == "function"){
                            funName= value.name ? value.name : "anon";
                            funId= getValue(value)
                            addToTrace("With",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),key.toString())
                        }
                    }
                }
                //console.log("With",val,getLoc("with",J$.getGlobalIID(iid)),getCurrentFrameID())
            },
        endExecution: function () {
            if (!isBrowser) {
                const fs = require('fs');
                const json = JSON.stringify(output, null, 2);
                filename=(process.argv[1]).replace(/.js$/,"_trace.json");
                fs.writeFileSync(filename, json, 'utf8',function(err) {
                    if(err) console.log('error', err);
                });
            }else{
                J$.CallTrace= output;
                return J$.CallTrace;
            }
    }
};

}());

//node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis experiments/flowTrace_smem2.js experiments/trex/example.js