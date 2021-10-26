(function () {
        //Datastructure Listing
        
        //Variable Listing
        var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
        var objGetPrototypeOf = Object.getPrototypeOf;
        var assignOp="";
        var rwVars=[];
        var funName;
        var baseName;
        var valName;
        var readAddress;
        var writeAddress;
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
                loc = J$.iidToLocation(giid);
                format = (/(\S+)\.js\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi);
                try{
                        locIid = format.exec(loc);}
                        catch(e){
                                console.log("Unsupported format: " +loc)
                        }
                scriptTag = ((loc.split("/").slice(-1)).toString().split(":").slice(0, 1)).toString();
                if (!scriptTag.startsWith("(")){
                        scriptTag="("+scriptTag;
                }
                final = scriptTag + "@" + locIid[2] + ")";
                return final;
        }
    
        J$.analysis = {
                putField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    console.log(base, offset, val,base[offset],typeof val)
                    if (typeof val== 'function'){
                        valName = val.name? val.name:"anon"

                        console.log("Function "+ valName +" was copied from "+valName +" to field " +offset+ " at "+ getLoc(J$.getGlobalIID(iid)))
                    }
                    if(isSetter(base,offset)){
                        console.log( "Setter "+offset + " accessed at " + getLoc(J$.getGlobalIID(iid)))
                        }
                },
                /*getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                    if(isGetter(base,offset)){
                    console.log( "Getter "+offset + " accessed at " + getLoc(J$.getGlobalIID(iid)))
                    }
                },*/
                invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
                    var isNative= (f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0)
                    //console.log(iid, f.name, base.name, args, result,isNative)
                    funName = f.name? f.name : "anon"
                    baseName = base.name? base.name:"anon"
                    if ((f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0) && ['call','apply'].includes(funName))  {
                        console.log("Function " + baseName + " was invoked at " + getLoc(J$.getGlobalIID(iid))) + " via " + funName }
                    else if (!(f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0)) {
                    console.log("Function " + funName + " created at "+ getLoc(J$.getGlobalIID(functionIid))+ " was invoked at " + getLoc(J$.getGlobalIID(iid)))
    
                    }
                },
                /*read: function (iid, name, val, isGlobal, isScriptLocal) {
                    console.log("read")
                    console.log(iid, name,val,getLoc(J$.getGlobalIID(iid)),typeof val)
                    if(typeof val== 'function'){
                        funName = val.name? val.name : "anon"
                        readName = name;
                        readAddress= getLoc(J$.getGlobalIID(iid));

                    }
                },*/
                write: function (iid, name, val, lhs, isGlobal, isScriptLocal) {
                    //console.log("write")
                    //console.log(iid, name, val, lhs,getLoc(J$.getGlobalIID(iid)))
                    if (typeof val == 'function' ){
                        funName = val.name? val.name : "anon"
                        console.log("Function "+funName + " was copied to "+ name +" at " + getLoc(J$.getGlobalIID(iid)))}
                        /*writeAddress=getLoc(J$.getGlobalIID(iid))
                        if (readAddress===writeAddress){
                        assignOp=writeAddress
                        rwVars[getLoc(J$.getGlobalIID(iid))]={"read":readName,"write":name,"value":funName}
                        }
                    }*/
                },
                /*endExpression: function (iid) {
                    if (assignOp !==""){
                        var temp=rwVars[assignOp]
                        console.log("Function "+temp["value"] + " was copied from "+ temp["read"]+" to "+ temp["write"] +" at " + getLoc(J$.getGlobalIID(iid)))
                        rwVars.pop();
                        assignOp=""
                    }
                }*/
                literal: function (iid, val, hasGetterSetter) {
                        //console.log("literal")
                        //console.log(iid, val,hasGetterSetter,getLoc(J$.getGlobalIID(iid)))
                        /*if(typeof val== 'function'){
                            console.log("lietral " + name + " " + getLoc(J$.getGlobalIID(iid)))}
                            //locToVarRead[getLoc(J$.getGlobalIID(iid))]=val.name ? val.name : "anon"
                            //rwStack.push(getLoc(J$.getGlobalIID(iid)))
                        }*/
                    },
                declare: function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
                    //console.log("declare")
                    //console.log(iid, name, val,typeof val,getLoc(J$.getGlobalIID(iid)))
                    if((typeof val)== 'function'){
                    funName = val.name? val.name : "anon"
                    if (!isArgument){
                    console.log("Function "+funName + " declared at " + getLoc(J$.getGlobalIID(iid)))}
                    else{
                    console.log("Function argument "+name + " with value "+ funName +" declared at " + getLoc(J$.getGlobalIID(iid)))}

                    }
                }
    
        };
    
    }());
    