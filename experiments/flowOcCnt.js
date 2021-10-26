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
        var resultObj = {
                "Setter Count": 0,
                "Getter Count": 0,
                "Bound Function": 0,
                "Dynamic Property Access": 0,
                "Eval Involved":0,
                "Eval via New Function":0,
                "Function Constructor Involved": 0,
                "Native Function": 0,
                "With Involved": 0,
                "Parameter passed via Apply" : 0

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
                    // && typeof val === 'function' && !isNative(val)
                    if(isSetter(base,offset) === true){
                        console.log("here",getLoc("",J$.getGlobalIID(iid)),base[offset],val)
                        resultObj["Setter Count"]+=1
                    }else if (typeof val== 'function' && isComputed){
                        resultObj["Dynamic Property Access"]+=1
                    }  
                },
                getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    if(isGetter(base,offset) === true && typeof val === 'function' & !isNative(val)){
                        resultObj["Getter Count"]+=1
                    }else if (typeof val== 'function' && isComputed){
                        resultObj["Dynamic Property Access"]+=1
                    }  
                },
                functionEnter: function(iid, f, dis, args){
                        
                        if(getLoc("fenter1",J$.getGlobalIID(iid)).startsWith("eval:")){
                            resultObj["Eval Involved"]+=1
                        }else if(getLoc("fenter1",J$.getGlobalIID(iid)).startsWith("evalIndirect:")){
                            resultObj["Eval via New Function"]+=1
                        }
                        callStack.push(J$.getGlobalIID(iid))
                },
                functionExit: function (iid, returnVal, wrappedExceptionVal){
                        callStack.pop();
                },
                scriptEnter: function (iid, instrumentedFileName, originalFileName) {
                        callStack.push(J$.getGlobalIID(iid));
                },
                scriptExit: function (iid, wrappedExceptionVal) {
                        callStack.pop();
                },
                invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
                    if (isNative(f)){
                        if(f === Function){
                            resultObj["Function Constructor Involved"]+=1                        
                        }
                        else if ((f===Function.prototype.apply) && args[1]!==undefined){
                            for(var i=0; i<args[1].length;i++){
                                    if(typeof args[1][i] == 'function'){
                                            resultObj["Parameter passed via Apply"]+=1
                                    }
                            }
                        }
                        else if(f.name.startsWith("bound ")){
                                    resultObj['Bound Function']+=1
                        }else{
                                    resultObj['Native Function']+=1
                        }
                    }
                    
                },
                _with: function (iid, val) {
                        console.log(getLoc("",J$.getGlobalIID(iid)),val)
                        resultObj["With Involved"]+=1
                },
            endExecution: function () {
                
                if (!isBrowser) {
                    const fs = require('fs');
                    const json = JSON.stringify(resultObj, null, 2);
                    console.log(resultObj)
                    filename=(process.argv[1]).replace(/.js$/,"_counts.json");
                    fs.writeFileSync(filename, json, 'utf8',function(err) {
                        if(err) console.log('error', err);
                    });
                }else{
                    J$.CallTrace= resultObj;
                    return J$.CallTrace;
                }
        }
    };
    
    }());