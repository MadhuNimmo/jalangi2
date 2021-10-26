(function () {
    //Datastructure Listing
    
    //Variable Listing
    var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
    var objGetPrototypeOf = Object.getPrototypeOf;
    locToVarRead={}
    rwStack=[]
    var write=false;
    function getValue(v) {
        var type = typeof v;
        if ((type ==='function') && v!== null) {
            var shadowObj = sandbox.smemory.getShadowObjectOfObject(v);
            return type+"(id="+sandbox.smemory.getIDFromShadowObjectOrFrame(shadowObj)+")";
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
            loc = J$.iidToLocation(giid);
            format = (/(\S+)\.js\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi);
            //locIid = format.exec(loc);
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

            /**
             * @desc Pushes the script identifier onto the CallStack and
             * stores "global" as the name of the script identifier
             * before the execution of a JavaScript file
             * @param {number} iid - Static unique instruction identifier of this callback
             * @param {string} instrumentedFileName - Name of the instrumented script file
             * @param {string} originalFileName - Name of the original script file
             * @returns {undefined} - Any return value is ignored
             */
            scriptEnter: function (iid, instrumentedFileName, originalFileName) {
                    /*if (!isBrowser) {
                            fs = require('fs');
                    }*/
            },
            /**
             * @desc Removes the top element of the setterGetter after a set method 
             * invocation if the iid of the invoked entity matches the
             * top element(iid) of the setterGetter
             * @param {number} iid - Static unique instruction identifier of this callback
             * @param {*} base - Base object
             * @param {*} offset - Property
             * @param {*} val - Value to be stored in <code>base[offset]</code>
             * @param {boolean} isComputed - True if property is accessed using square brackets.  For example,
             * <tt>isComputed</tt> is <tt>true</tt> if the get field operation is <tt>o[p]</tt>, and <tt>false</tt>
             * if the get field operation is <tt>o.p</tt>
             * @param {boolean} isOpAssign - True if the operation is of the form <code>o.p op= e</code>
             * @returns {undefined} - Any return value is ignored
             */
            putField : function (iid, base, offset, val, isComputed, isOpAssign) {
                if(isSetter(base,offset)){
                    console.log( "Setter "+offset + " accessed at " + getLoc(J$.getGlobalIID(iid)))
                    }
            },
            /**
             * @desc Removes the top element of the setterGetter after a get method 
             * invocation if the iid of the invoked entity matches the
             * top element(iid) of the setterGetter
             * @param {number} iid - Static unique instruction identifier of this callback
             * @param {*} base - Base object
             * @param {string|*} offset - Property
             * @param {*} val - Value of <code>base[offset]</code>
             * @param {boolean} isComputed - True if property is accessed using square brackets.  For example,
             * <tt>isComputed</tt> is <tt>true</tt> if the get field operation is <tt>o[p]</tt>, and <tt>false</tt>
             * if the get field operation is <tt>o.p</tt>
             * @param {boolean} isOpAssign - True if the operation is of the form <code>o.p op= e</code>
             * @param {boolean} isMethodCall - True if the get field operation is part of a method call (e.g. <tt>o.p()</tt>)
             * @returns {undefined} - Any return value is ignored
             */
            getField : function (iid, base, offset, val, isComputed, isOpAssign) {
                if(isGetter(base,offset)){
                console.log( "Getter "+offset + " accessed at " + getLoc(J$.getGlobalIID(iid)))
                }
            },
            /**
             * @desc Removes the top element of the CallStack after a function, method, 
             * or constructor invocation if the iid of the invoked entity matches the
             * top element(iid) of the CallStack
             * @param {number} iid - Static unique instruction identifier of this callback
             * @param {function} f - The function object that was invoked
             * @param {*} base - The receiver object for the function <tt>f</tt>
             * @param {Array} args - The array of arguments passed to <tt>f</tt>
             * @param {*} result - The value returned by the invocation
             * @param {boolean} isConstructor - True if <tt>f</tt> is invoked as a constructor
             * @param {boolean} isMethod - True if <tt>f</tt> is invoked as a method
             * @param {number} functionIid - The iid (i.e. the unique instruction identifier) where the function was created
             * @param {number} functionSid - The sid (i.e. the unique script identifier) where the function was created
             * @returns {undefined} - Any return value is ignored
             */
            invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
                //console.log("invoked")
                //console.log(iid, f.name, base.name,args, isMethod, functionIid, functionSid,getLoc(J$.getGlobalIID(iid)))
                var funName = f.name? f.name : "anon"
                if ((f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0) && ['call','apply'].includes(f.name))  {
                    console.log("Function " + base.name + " was invoked at " + getLoc(J$.getGlobalIID(iid)))}
                else if (!(f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0)) {
                console.log("Function " + funName + " created at "+ getLoc(J$.getGlobalIID(functionIid))+ " was invoked at " + getLoc(J$.getGlobalIID(iid)))
                //console.log("Function " +funName+ " was invoked at " + getLoc(J$.getGlobalIID(iid)))

                }
            },
            /*read: function (iid, name, val, isGlobal, isScriptLocal) {
                //console.log("read")
                //console.log(iid, name,getLoc(J$.getGlobalIID(iid)),typeof val)
                /*if(typeof val== 'function'){
                    //console.log("Function " + name + " written to at" + getLoc(J$.getGlobalIID(iid)))}
                    locToVarRead[getLoc(J$.getGlobalIID(iid))]=name? name: "anon"
                    rwStack.push(getLoc(J$.getGlobalIID(iid)))
                }
            },
            literal: function (iid, val, hasGetterSetter) {
                //console.log("literal")
                //console.log(iid, val,hasGetterSetter,getLoc(J$.getGlobalIID(iid)))
                /*if(typeof val== 'function'){
                    //console.log("Function " + name + " written to at" + getLoc(J$.getGlobalIID(iid)))}
                    locToVarRead[getLoc(J$.getGlobalIID(iid))]=val.name ? val.name : "anon"
                    rwStack.push(getLoc(J$.getGlobalIID(iid)))
                }
            },*/

            write: function (iid, name, val, lhs, isGlobal, isScriptLocal) {
                //console.log("write")
                //console.log(iid, name, val, lhs,getLoc(J$.getGlobalIID(iid)))
                //if(rwStack[rwStack.length-1]==getLoc(J$.getGlobalIID(iid))){
                var funName = val.name? val.name : "anon"
                if (typeof val == 'function'){
                    //writeStack[];
                    //console.log("Function "+funName + " was written to "+ name +" at " + getLoc(J$.getGlobalIID(iid)))}
                }


            },
            declare: function (iid, name, val, isArgument, argumentIndex, isCatchParam) {
                if((typeof val)=== 'function'){
                locToVarRead[getLoc(J$.getGlobalIID(iid))]=val.name ? val.name : "anon"
                rwStack.push(getLoc(J$.getGlobalIID(iid)))
                console.log("Function "+name + " declared at " + getLoc(J$.getGlobalIID(iid)))}
            },
            /**
             * @desc Removes the top element of the CallStack when the execution of a JavaScript file completes
             * @param {number} iid - Static unique instruction identifier of this callback
             * @param {{exception:*} | undefined} wrappedExceptionVal - If this parameter is an object, the function
             * execution has thrown an uncaught exception and the exception is being stored in the <tt>exception</tt>
             * property of the parameter
             * @returns {undefined} - Any return value is ignored
             */
            endExpression: function (iid) {
                if (write){
                    console.log("Function "+funName + " was copied to "+ name +" at " + getLoc(J$.getGlobalIID(iid)))}
                //}
            },
            /**
             * @desc Writes the output to the console and text file for a javascript file 
             * and to the console only for web applications when an execution terminates in node.js
             * 
             * @returns {undefined} - Any return value is ignored
             */
            endExecution: function () {
                    //Generating the final output
                    /*for (caller in callerToCallee) {
                            for (var i = 0; i < callerToCallee[caller].length; i++) {
                                    console.log(caller + " -> " + callerToCallee[caller][i]);
                                    text += caller + " -> " + callerToCallee[caller][i] + "\n";
                            }
                            if (!(caller in jsonCallList)){
                                    jsonCallList[caller]=callerToCallee[caller];
                                    }
                    }*/
                    //Writing the output to a file
                    /*if (!isBrowser) {
                            origName = process.argv[1];
                            instname = origName.replace(/.js$/, "_jalangi_dynCalls.txt");
                            fs.writeFile(instname, text, function(err) {
                                    if(err) console.log('error', err);
                                  });
                    }
                    J$.callList=jsonCallList
                    return J$.callList*/
            }

    };

}());
