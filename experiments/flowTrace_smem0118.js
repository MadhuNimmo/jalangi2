(function () {
        //Datastructure Listing
        
        //Variable Listing
        var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
        var objGetPrototypeOf = Object.getPrototypeOf;
        var output= [];
        var callStack=[];
        var frmToFunName = {};
        //new
        var funIDToDecl = {};
        //var iidToFunName = {}
        var funName;
        var SPECIAL_PROP_SID = J$.Constants.SPECIAL_PROP_SID;
        var SPECIAL_PROP_IID = J$.Constants.SPECIAL_PROP_IID;
        var isBrowser = J$.Constants.isBrowser;
        var ifNative="";
        var scriptName="";
        var scriptSet = []
        var avail = false;
        // /(?!\S*\()(\S+\.js)\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi;
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
            newObj.typ = typ;//typ[0]+typ[typ.length-1];
            newObj.funName = funName;
            newObj.identity = identity;
            newObj.loc = loc;
            if (typ=="InvokeReturn"){
                newObj.ret = others;
            }
            /*else if (typ=="ParameterPass"){
                newObj.args = others;
            }*/
            else if (typ=="Get" || typ=="Getter"){
                newObj.from = others;
            }
            else if (typ=="LocRead" || typ=="LexRead"){
                newObj.from = others[0];
                newObj.curr = others[1]
            }
            else if (typ=="Write" || typ=="Declare" || typ=="Put" || typ=="Setter"){
                newObj.to = others;
            }
            //var newArr = [typ, funName, identity, loc, others]
            //output.push(newObj)
            //output.push(newArr)
            //var avail =output.some(item => Object.keys(item).length===Object.keys(newObj).length && Object.keys(item).every( key => newObj.hasOwnProperty(key) && newObj[key] === item[key]) )
            /*var avail = output.indexOf(newObj)//output.some(item => JSON.stringify(item) === JSON.stringify(newObj))*/
            /*for (var i=output.length-1;i>=output.length-100;i--){
                if(JSON.stringify(output[i]) === JSON.stringify(newObj)){
                    avail=true
                    break;
                }
            }
            if (!avail){*/
                output.push(newObj)
            /*}
            avail=false;*/
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
                //With the recent changes the whole address is used  
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
                        //addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),getValue(base)+":"+"set")
                        addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),"set")
                        addToTrace("InvokeSetter",funName,funId,getLoc("put",J$.getGlobalIID(iid)))
                    }else if (typeof val== 'function'){
                            funName = val.name? val.name: "anon"
                            funId= getValue(val)
                            //addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),getValue(base)+":"+offset.toString())
                            addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),offset.toString())
                            //new to resolve lexVar issues
                            //var frm= getCurrentFrameID();
                            //frmToFunName[frm] = getLoc("lit2",J$.getGlobalIID(iid))
                        }
                },
                getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    if(isGetter(base,offset)){
                        var desc = getPropertyDescriptor(base,offset);
                        funName = desc.get.name? desc.get.name: "anon"
                        funId=getValue(desc.get)
                        //addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),getValue(base)+":"+"get")
                        addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),"get")
                        addToTrace("InvokeGetter",funName,funId,getLoc("get",J$.getGlobalIID(iid)))
                    /*    var list=null;
                    if (typeof val=="function"){
                            retName = val.name ? val.name : "anon";
                            retId = getValue(val)
                            retLoc = getLoc(J$.getGlobalIID(iid));
                        var obj = {
                            "retId" : retId,
                            "retName" : retName,
                            "retLoc" : retLoc              
                        };
                        if(list==null){
                            list=[];
                            list.push(obj);
                        }
                        console.log("okay now", getLoc(getPropSafe(val, SPECIAL_PROP_SID)+":"+getPropSafe(val, SPECIAL_PROP_IID)))

                    }
                    addToTrace("InvokeReturn",funName,funId,getLoc(J$.getGlobalIID(iid)),list)
                    */
                    }else if (typeof val== 'function'){
                            funName = val.name? val.name: "anon"
                            funId= getValue(val)
                            //console.log("Get",funName,funId,getLoc(J$.getGlobalIID(iid)),getValue(base), offset)
                            //new Symbol.Iterator throwing error
                            //addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),getValue(base)+":"+offset.toString())     
                            addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),offset.toString())     

                    }
                },
                declare: function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
                    //new to tackle arguments 
                    if(name==="arguments" && isArgument && typeof val== 'object' && val!=null){
                        for (var [key,value] of Object.entries(val)){
                            if(typeof value == "function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)//getPropSafe(value, SPECIAL_PROP_IID)+":"+getPropSafe(value, SPECIAL_PROP_SID);
                                //addToTrace("Put",funName, funId,getLoc("declare",J$.getGlobalIID(iid)),getValue(val)+":"+key)
                                addToTrace("Put",funName, funId,getLoc("declare",J$.getGlobalIID(iid)),key.toString())
                                //new for unresolved lexReads 
                                //var frm= getCurrentFrameID();
                                //frmToFunName[frm] = getLoc("lit2",J$.getGlobalIID(iid))

                            }
                        }
                    }
                    else if((typeof val)=== 'function'){
                        funName = val.name? val.name : "anon"
                        var funId = getValue(val)
                        addToTrace("Declare",funName,funId,getLoc("declare",J$.getGlobalIID(iid)),getFrameID(name)+":"+name)//}

                    }
                },
                literal: function (iid, val, hasGetterSetter) {
                    if(typeof val== 'function'){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        addToTrace("Create",funName,funId,getLoc("literal",J$.getGlobalIID(iid)))
                        //new for resolving lexreads with gunNames
                        //newest
                        //var callerName = iidToFunName[callStack[callStack.length-1]]
                        //funIDToDecl[funId]= callerName==""?getLoc("create",callStack[callStack.length-1]):callerName
                        funIDToDecl[funId]= getLoc("create",callStack[callStack.length-1])

                    }
                    else if(typeof val== 'object' && val!=null){
                        if(Array.isArray(val)){
                            for (var key in val){
                                if(typeof val[key] =="function"){
                                    funName= val[key].name ? val[key].name : "anon";
                                    funId= getValue(val[key])//getPropSafe(key, SPECIAL_PROP_IID)+":"+getPropSafe(key, SPECIAL_PROP_SID);
                                    //addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),getValue(val)+":"+key)
                                    addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),key.toString())
                                    //new for unresolved lexReads
                                    //var frm= getCurrentFrameID();
                                    //frmToFunName[frm] = getLoc("lit2",J$.getGlobalIID(iid))

                                }
                            }
                        }
                        else{
                            for (var [key,value] of Object.entries(val)){
                                    if(typeof value == "function"){
                                        funName= value.name ? value.name : "anon";
                                        funId= getValue(value)//getPropSafe(value, SPECIAL_PROP_IID)+":"+getPropSafe(value, SPECIAL_PROP_SID);
                                        //addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),getValue(val)+":"+key)    
                                        addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),key.toString())
                                        //new for unresolved lexReads
                                        //var frm= getCurrentFrameID();
                                        //frmToFunName[frm] = getLoc("lit2",J$.getGlobalIID(iid))

                                    }
                                }
                        }
                    }
                },
                functionEnter: function(iid, f, dis, args){
                        var giid = J$.getGlobalIID(iid);
                        var frm= getCurrentFrameID();
                        var funName = f.name 
                        var funId = getValue(f)
                        //iidToFunName[giid] = funName == "" ? "anon" : funName;
                        //new
                        if(funName === ""){
                            frmToFunName[frm] = getLoc("fenter1",J$.getGlobalIID(iid))
                            
                        }else{
                            if (callStack.length === 0) {
                                frmToFunName[frm] = "system"+"/"+funName;
                            }else{
                                //new for resolving lexreads with funNames
                                frmToFunName[frm] =  funIDToDecl[funId]+"/"+funName
                                //getLoc("fenter2",callStack[callStack.length-1])+"/"+funName
                            }
                        }
                        //frmToFunName[frm] = funName === "" ? getLoc("fenter1",J$.getGlobalIID(iid)) : getLoc("fenter2",callStack[callStack.length-1])+"/"+funName;
                        //new pushing giid
                        callStack.push(giid);
                },
                functionExit: function (iid, returnVal, wrappedExceptionVal){
                        //if(callStack[callStack.length-1]===iid){
                        callStack.pop();
                        //}
                },
                scriptEnter: function (iid, instrumentedFileName, originalFileName) {
                    //some lexreads ended up being locreads-global
                    //new enabled evalIndirect for new Function based script handling
                    //if (originalFileName!="evalIndirect"){//unnecesary , study the behaviour //new
                        var frm= getCurrentFrameID();
                        var giid = J$.getGlobalIID(iid);
                        var funName = originalFileName
                        frmToFunName[frm] = funName
                        //iidToFunName[giid] = funName
                        callStack.push(giid);
                        scriptName=funName;
                        scriptSet.push(funName)
                    //}
                },
                scriptExit: function (iid, wrappedExceptionVal) {
                        //if(callStack[callStack.length-1]===iid){
                        callStack.pop();
                        //}
                },
            
                invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
                    //new
                    if(isNative(f) && f===Array.prototype.push){
                        for (var [key,value] of Object.entries(args)){
                            if(typeof value == "function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)//getPropSafe(value, SPECIAL_PROP_IID)+":"+getPropSafe(value, SPECIAL_PROP_SID);
                                var index = (base.length+Number(key)).toString()
                                //addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),getValue(base)+":"+index)
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),index)
                                //new for unresolved lexReads
                                //var frm= getCurrentFrameID();
                                //frmToFunName[frm] = getLoc("lit2",J$.getGlobalIID(iid))

                            }
                        }
                    }
                    //new handling of shift and unshift
                    if(isNative(f) && f===Array.prototype.shift){
                        for (var key in base){
                            if(typeof base[key] =="function"){
                                funName= base[key].name ? base[key].name : "anon";
                                funId= getValue(base[key])
                                var indx = (Number(key) - 1).toString()
                                //addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),getValue(base)+":"+indx)
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),indx)

                            }
                        }
                    }
                    if(isNative(f) && f===Array.prototype.unshift){
                        for (var [key,value] of Object.entries(args)){
                            if(typeof value =="function"){
                                funName= value.name ? value.name : "anon";
                                funId= getValue(value)
                                //addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),getValue(base)+":"+key)
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),key.toString())

                            }
                        }
                        for (var key in base){
                            if(typeof base[key] =="function"){
                                funName= base[key].name ? base[key].name : "anon";
                                funId= getValue(base[key])
                                var indx = (Number(key) + args.length).toString()
                                //addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),getValue(base)+":"+indx)
                                addToTrace("Put",funName, funId,getLoc("literal",J$.getGlobalIID(iid)),indx)

                            }
                        }
                    }
                    //var frm= getCurrentFrameID();
                    var funName = f.name 
                    //new
                    if (isNative(f) && (f===Function.prototype.apply || f===Function.prototype.call)){//["call","apply"].includes(f.name)){
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
                    
                    if (isNative(f) && ["call","apply"].includes(f.name)){
                        funName = base.name? base.name : "anon"
                        funId= getValue(base)//getUniqId(base,SPECIAL_PROP_IID,SPECIAL_PROP_SID)
                        
                    }
                    else{
                        funName = f.name? f.name : "anon"
                        funId= getValue(f)//getUniqId(f,SPECIAL_PROP_IID,SPECIAL_PROP_SID)
                    }
                    var list=null;
                    if (typeof result=="function"){
                            retName = result.name ? result.name : "anon";
                            retId = getValue(result)//getUniqId(result,SPECIAL_PROP_IID,SPECIAL_PROP_SID)
                            retLoc = getLoc("invkfun",functionSid+":"+functionIid);
                            retLoc= retLoc==="None"?getLoc("",getPropSafe(base, SPECIAL_PROP_SID)+":"+getPropSafe(base, SPECIAL_PROP_IID)):retLoc;
                        //}
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
                            //retLoc = //getLoc("invkfun",functionSid+":"+functionIid);
                            //addToTrace("Get",funName, funId, retLoc,getValue(base)+":"+indx)
                            addToTrace("Get",funName, funId, getLoc("invkretrn",J$.getGlobalIID(iid)),indx)

                        }
                    }
                
                },
                /*_with: function (iid, val) {
                    console.log("with",iid, val, getLoc("",J$.getGlobalIID(iid)))
                },*/
                read: function (iid, name, val, isGlobal, isScriptLocal) {
                    if(typeof val== 'function'){
                        
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        //read,function,uniqiid:uniqsid,loc,from
                        if (scriptSet.includes(frmToFunName[getFrameID(name)])){
                            addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,"Global"])
                        }
                        //lexical reads
                        else if(getFrameID(name)!==getCurrentFrameID()){

                                addToTrace("LexRead",funName,funId,frmToFunName[getFrameID(name)]==undefined?"None":frmToFunName[getFrameID(name)],[getFrameID(name)+":"+name,getCurrentFrameID()])
                        }else{
                                //if part of no closures
                                /*if (frmToFunName[getFrameID(name)]===scriptName){
                                    addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,"Global"])
                                }else{*/
                                    //local reads
                                    addToTrace("LocRead",funName,funId,getLoc("read",callStack[callStack.length-1]),[getFrameID(name)+":"+name,getCurrentFrameID()])
                                //}
                        }

                    }
                },
                write: function (iid, name, val, lhs, isGlobal, isScriptLocal) {
                    if (typeof val == 'function' ){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        //write,function,uniqiid:uniqsid,loc,to
                        addToTrace("Write",funName,funId,getLoc("write",J$.getGlobalIID(iid)),getFrameID(name)+":"+name)//getFrameID("this"))
                    }
                },
                _return: function (iid, val) {
                    if (typeof val == 'function' ){
                        funName = val.name? val.name : "anon"
                        funId = getValue(val)
                        addToTrace("Return",funName, funId,getLoc("return",J$.getGlobalIID(iid)))
                    }
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
                    //const json = JSON.stringify(output, null, 2)
                    J$.CallTrace= output;
                    return J$.CallTrace;
                }
        }
    };
    
    }());
    