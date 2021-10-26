(function () {
        //Datastructure Listing
        var jsonCallList={}; //JSON output
        var finalList={}; //JSON output
        var propNames={}
        var propInfo={}

        //Variable Listing
        var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
        var objGetPrototypeOf = Object.getPrototypeOf;
        var isBrowser = J$.Constants.isBrowser;
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
        function getLoc(giid) {
                var loc = J$.iidToLocation(giid);
                var locIid = "";
                try{
                        locIid = format.exec(loc);
                        format.lastIndex = 0;
                        return locIid[1].replace("(",":")+"@"+locIid[2];
                }
                catch(e){
                        console.log("Unsupported format: " +loc)
                        return;
                }
        }
        J$.analysis = {

                putField : function (iid, base, offset, val, isComputed, isOpAssign) {
                        if (typeof val== 'function' && !isNative(val)){
                                
                                funName = val.name? val.name: "anon"
                                funId= getValue(val)
                                if(!(offset.toString() in propNames)){
                                        propNames[offset.toString()]= []
                                        propInfo[offset.toString()]={}
                                }
                                if(!(offset.toString() in propInfo)){
                                        propInfo[offset.toString()]={}
                                }
                                if (Array.isArray(propNames[offset.toString()])){
                                        propNames[offset.toString()].push(funId)
                                }
                                
                                jsonCallList[funId]={"Put":offset.toString(), "putLoc":getLoc(J$.getGlobalIID(iid))}
                                if(propInfo[offset.toString()]!==undefined){
                                        if(propInfo[offset.toString()]["Put"]==undefined){
                                                propInfo[offset.toString()]["Put"]=[]
                                                propInfo[offset.toString()]["putLoc"]=[]
                                        }
                                }

                                propInfo[offset.toString()]["Put"].push(funId)
                                propInfo[offset.toString()]["putLoc"].push(getLoc(J$.getGlobalIID(iid)))
                                //propInfo[offset.toString()]={"Put":funId, "putLoc":getLoc(J$.getGlobalIID(iid))}
                        }
                },
                /*literal: function (iid, val, hasGetterSetter) {
                        if(typeof val== 'object' && val!=null){
                            if(Array.isArray(val)){
                                for (var key in val){
                                    if(typeof val[key] =="function"){
                                        funName= val[key].name ? val[key].name : "anon";
                                        funId= getValue(val[key])
                                        if(!(key.toString() in propNames)){
                                                propNames[key.toString()]= []
                                        }
                                        if (Array.isArray(propNames[key.toString()])){
                                                propNames[key.toString()].push(funId)
                                        }
                                        jsonCallList[funId]={"Put":key.toString(), "putLoc":getLoc(J$.getGlobalIID(iid))}
                                        propInfo[key.toString()]={"Put":funId, "putLoc":getLoc(J$.getGlobalIID(iid))}
                                    }
                                }
                            }
                            else{
                                for (var [key,value] of Object.entries(val)){
                                        if(typeof value == "function"){
                                            funName= value.name ? value.name : "anon";
                                            funId= getValue(value)
                                            if(!(key.toString() in propNames)){
                                                propNames[key.toString()]= []
                                                }
                                                if (Array.isArray(propNames[key.toString()])){
                                                        propNames[key.toString()].push(funId)
                                                }
                                            jsonCallList[funId]={"Put":key.toString(), "putLoc":getLoc(J$.getGlobalIID(iid))}
                                            propInfo[key.toString()]={"Put":funId, "putLoc":getLoc(J$.getGlobalIID(iid))}
                                        }
                                    }
                            }
                        }
                },*/
                getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                        
                        if (typeof val== 'function' && !isNative(val)){
                                funName = val.name? val.name: "anon"
                                funId= getValue(val)
                                if(jsonCallList[funId]==undefined){
                                        jsonCallList[funId]={}
                                }
                                if(propInfo[offset.toString()]!==undefined){
                                        if(propInfo[offset.toString()]["Get"]==undefined){
                                                propInfo[offset.toString()]["Get"]=[]
                                                propInfo[offset.toString()]["getLoc"]=[]
                                        }
                                }
                                jsonCallList[funId]["Get"]=offset.toString()
                                jsonCallList[funId]["getLoc"]=getLoc(J$.getGlobalIID(iid))
                                if(propInfo[offset.toString()]!==undefined){
                                        propInfo[offset.toString()]["Get"].push(funId)
                                        propInfo[offset.toString()]["getLoc"].push(getLoc(J$.getGlobalIID(iid)))
                                }
                                /*if(!jsonCallList[funId]["Get"]){
                                        jsonCallList[funId]["Get"]=[]
                                        jsonCallList[funId]["getLoc"]=[]
                                }
                                if(!jsonCallList[funId]["Get"].includes(offset.toString())){
                                        jsonCallList[funId]["Get"].push(offset.toString())
                                }
                                if(!jsonCallList[funId]["getLoc"].includes(getLoc(J$.getGlobalIID(iid)))){
                                        jsonCallList[funId]["getLoc"].push(getLoc(J$.getGlobalIID(iid)))
                                }*/
                                /*if(jsonCallList[funId]["putLoc"]!=undefined && jsonCallList[funId]["getLoc"].split("@")[0]===jsonCallList[funId]["putLoc"].split("@")[0]){
                                        jsonCallList[funId]["diff"]="No"
                                }else if(jsonCallList[funId]["putLoc"]!=undefined && jsonCallList[funId]["getLoc"].split("@")[0]!==jsonCallList[funId]["putLoc"].split("@")[0]){
                                        jsonCallList[funId]["diff"]="Yes"
                                }*/
                                /*if(jsonCallList[funId]["Put"]!=undefined){
                                        if(jsonCallList[funId]["Get"]===jsonCallList[funId]["Put"]){
                                                jsonCallList[funId]["diffNames"]="SameName"
                                        }else{
                                                jsonCallList[funId]["diffNames"]="DiffName"
                                        }
                                }*/
                        }
                },
                
                endExecution: function () {
                        //Generating the final output
                        for(var item in propInfo){
                                //console.log(jsonCallList[item]["Put"],propNames[jsonCallList[item]["Put"]])
                                /*if(propNames[jsonCallList[item]["Put"]]!==undefined && propNames[jsonCallList[item]["Put"]].length>1){
                                        finalList[item]=jsonCallList[item]
                                        finalList[item]["duplicate"]=propNames[jsonCallList[item]["Put"]]
                                }*/
                                if(propInfo[item]["Put"]!==undefined && propInfo[item]["Put"].length>1){
                                        finalList[item]=propInfo[item]
                                }
                        }
                        J$.callList=finalList
                        return finalList
                }

        };

}());

/*
node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis DynNative.js experiments/example.js
node src/js/commands/instrument.js --inlineIID --inlineSource -i --inlineJalangi --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/sample_analyses/dlint/Utils.js --analysis DynNative.js --outputDir /tmp experiments/html/
open file:///tmp/html/index.html
*/
