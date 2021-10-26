(function () {
        //Datastructure Listing
        
        //Variable Listing
        var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
        var objGetPrototypeOf = Object.getPrototypeOf;
        var output=[];
        //var lst= ["MyPhone"]
        var isBrowser = J$.Constants.isBrowser;
        var ifNative="";
        var format = /(?!\S*\()(\S+\.js)\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi;
    
        //var lst = []
        //lst = J$.ast_info
        J$.ast_info = ["MyPhone"]
        function addToTrace(typ, funName, identity, loc, others) {
            var newObj={}
            newObj.typ = typ;//typ[0]+typ[typ.length-1];
            newObj.funName = funName;
            newObj.identity = identity;
            newObj.loc = loc;
            if (typ=="InvokeReturn"){
                newObj.ret = others;
            }
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
        function getLoc(caller,giid) {
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
                        return locIid[1]+"@"+locIid[2];
                }
                        catch(e){
                                //console.log("Unsupported format: " +caller+" "+ loc)
                                return;
                        }
        }
    
        J$.analysis = {
                binary : function (iid, op, left, right, result, isOpAssign, isSwitchCaseComparison, isComputed) {  
                    if(typeof result === 'string' && J$.ast_info.includes(result)){
                        output.push(["Binary",getLoc('binary',J$.getGlobalIID(iid)),result])
                    }
                },
                putField : function (iid, base, offset, val, isComputed, isOpAssign) {  
                    if((offset != null || offset != undefined) && J$.ast_info.includes(offset.toString())){
                        output.push(["Put Key",getLoc('putField',J$.getGlobalIID(iid)),offset.toString()])
                    }/*else 
                    if(j$.ast_info.includes(val) && isComputed){
                        output.push(["Put Value",getLoc(J$.getGlobalIID(iid)),val])
                    }  */
                },
                getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    if((offset !== null || offset !== undefined) && J$.ast_info.includes(offset+"")){
                        output.push(["Get Key",getLoc('getField',J$.getGlobalIID(iid)),offset+""])
                    }
                    if((val !== null || val !== undefined)) {
                        try{
                            if (J$.ast_info.includes(val.toString())){ //&& isComputed){
                            output.push(["Get Value",getLoc('getField',J$.getGlobalIID(iid)),val.toString()])
                            }
                        }catch(e){}
                    }
                },
                declare: function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
                    if(name==="arguments" && isArgument && typeof val== 'object' && val!=null){
                        for (var [key,value] of Object.entries(val)){
                            if(J$.ast_info.includes(key.toString())){
                                //new
                                output.push(["Arguments Object",getLoc('declare',J$.getGlobalIID(iid)),key.toString()])
                                output.push(["Put Key",getLoc('declare',J$.getGlobalIID(iid)),key.toString()])
                            }
                        }
                    }
                    if(typeof val== 'string' && J$.ast_info.includes(val) && isArgument){
                        output.push(["Function Argument",getLoc('declare',J$.getGlobalIID(iid)),val])
                    }
                },
                literal: function (iid, val, hasGetterSetter) {
                    if((val != null || val != undefined) && J$.ast_info.includes(val.toString())){
                        var addr = getLoc('literal',(J$.sid+":"+iid))
                        if(addr!==null){
                            output.push(["Literal",addr,val.toString()])
                        }
                    }
                    else if(typeof val== 'object' && val!=null){
                        if(Array.isArray(val)){
                                for (var key in val){
                                    /*if(J$.ast_info.includes(val[key])){
                                        output.push(["Put Value",getLoc("literal",J$.getGlobalIID(iid)),val[key]])
                                    }else*/
                                    try{
                                        if(J$.ast_info.includes(key.toString())){
                                            output.push(["Put Key",getLoc("literal",J$.getGlobalIID(iid)),key.toString()])
                                        }
                                    }catch(e){}
                                }
                        }
                        else{
                            for (var [key,value] of Object.entries(val)){
                                try{
                                    if(J$.ast_info.includes(key.toString())){
                                        output.push(["Put Key",getLoc("literal",J$.getGlobalIID(iid)),key.toString()])
                                    }/*else
                                    if(J$.ast_info.includes(value.toString())){
                                        output.push(["Put Value",getLoc("literal",J$.getGlobalIID(iid)),value.toString()])
                                    }*/
                                }catch(e){}
                            }
                        }
                    }
                },
                forinObject: function (iid, val, hasGetterSetter) {
                    for(var item in val){
                        if(J$.ast_info.includes(item.toString())){
                            output.push(["ForInKey",getLoc('forInObject',J$.getGlobalIID(iid)),item.toString()])
                        }
                        /*if(j$.ast_info.includes(val[item])){
                            output.push(["ForInValue",getLoc(J$.getGlobalIID(iid)),val[item]])
                        }*/
                    }
                },/*
                functionEnter: function(iid, f, dis, args){
                    if(j$.ast_info.includes(result)){
                        output.push(["Binary",iid,result])
                    }
                },
                functionExit: function (iid, returnVal, wrappedExceptionVal){

                },
                scriptEnter: function (iid, instrumentedFileName, originalFileName) {

                },
                scriptExit: function (iid, wrappedExceptionVal) {

                },*/
                invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
                    if(isNative(f) && f===Array.prototype.push){
                        for (var [key,value] of Object.entries(args)){
                            //console.log(base.length,key)
                            var index = (base.length+Number(key)).toString()
                            if(J$.ast_info.includes(index)){
                                output.push(["Array Push",getLoc('ArrayPush',J$.getGlobalIID(iid)),index])
                                output.push(["Put Key",getLoc('InvokeFunPre',J$.getGlobalIID(iid)),index])

                            }
                        } 
                    }
                    //tricky as the argument pattern will differ for every native method. 
                },
                invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
                    if(J$.ast_info.includes(result)){
                        output.push(["Function Return",getLoc('InvokeFun',J$.getGlobalIID(iid)),result.toString()])
                    }
                },
                read: function (iid, name, val, isGlobal, isScriptLocal) {
                    if(typeof val === 'string' && J$.ast_info.includes(val)){
                        output.push(["Read",getLoc("Read",J$.getGlobalIID(iid)),val])
                    }
                },
                write: function (iid, name, val, lhs, isGlobal, isScriptLocal) {
                    if(typeof val === 'string' && J$.ast_info.includes(val)){
                        output.push(["Write",getLoc("Write",J$.getGlobalIID(iid)),val])
                    }
                },
                endExecution: function () {
                    if (!isBrowser) {
                    const fs = require('fs');
                    const json = JSON.stringify(output, null, 2);
                    filename=(process.argv[1]).replace(/.js$/,"_vartrace.json");
                    fs.writeFileSync(filename, json, 'utf8',function(err) {
                        if(err) console.log('error', err);
                    });
                }else{
                    //const json = JSON.stringify(output, null, 2)
                    J$.StringTrace= output;
                    return J$.StringTrace;
                }
                }
    };
    
    }());
    