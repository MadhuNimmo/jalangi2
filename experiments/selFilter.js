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
                newObj.from = others;
            }
            else if (typ=="LocRead" || typ=="LexRead"){
                newObj.from = others[0];
                newObj.curr = others[1];
                newObj.eloc = others[2]
            }
            else if (typ=="Write" || typ=="Declare" || typ=="Put" || typ=="Setter"){
                newObj.to = others;
            }

            output.push(newObj)
          }
        function isNative(input){
            //console.log("here",input)
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

                if (typeof val== 'function' && !isNative(val)){
                            //console.log(val,Object.getOwnPropertyNames(base),offset)  
                            funName = val.name? val.name: "anon"
                            funId= getValue(val)
                            addToTrace("Put",funName,funId,getLoc("put",J$.getGlobalIID(iid)),[Object.getOwnPropertyNames(base).join("|"),offset])
                        }
                },
                getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    
                    if (typeof val== 'function' && !isNative(val)){
                            //console.log(val,Object.getOwnPropertyNames(base),offset)  
                            funName = val.name? val.name: "anon"
                            funId= getValue(val)
                            addToTrace("Get",funName,funId,getLoc("get",J$.getGlobalIID(iid)),[Object.getOwnPropertyNames(base).join("|"),offset])     

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
                    J$.CallTrace= output;
                    return J$.CallTrace;
                }
        }
    };
    
    }());