(function () {
        //Datastructure Listing
        var callerToCallee = Object.create(null); // Caller name@location => Callee name@location
        var iidToFunName = Object.create(null); // Function iid => Function name
        var iidToCallerLoc = Object.create(null); // Callee iid => Caller iid
        var callStack = []; //Sequence of active calls
        var applyStack = []
        var currFunStack = []
        var setterGetter= []; //Sequence of active setters and getters
        var jsonCallList={}; //JSON output
        var jsonFunList= new Set(); //JSON output

        //Variable Listing
        var objGetOwnPropDesc = Object.getOwnPropertyDescriptor;
        var objGetPrototypeOf = Object.getPrototypeOf;
        var isBrowser = J$.Constants.isBrowser;
        var callerIid = "";
        var calleeIid = "";
        var calleeIids = "";
        var format = /(?!\()(\S+\.js)\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi;
        jSetTimeout = setTimeout
        jSetInterval = setInterval
        jClearTimeout = clearTimeout
        jClearInterval = clearInterval
        var listXss=[jSetTimeout, jSetInterval, jClearTimeout, jClearInterval]
        var xssProps=[]

        var SPECIAL_PROP_SID = J$.Constants.SPECIAL_PROP_SID;
        var SPECIAL_PROP_IID = J$.Constants.SPECIAL_PROP_IID;
        function getPropSafe(base, prop){
                if(base === null || base === undefined){
                  return undefined;
                }
                return base[prop];
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
                        xssProps= ["innerHTML","outerHTML","text","textContent","href","action","formaction","location","src","srcdoc","cssText","rel"]
                        var giid = J$.getGlobalIID(iid);
                        iidToFunName[giid] = "global";
                        if (!isBrowser) {
                                fs = require('fs');
                        }
                },
                getFieldPre : function (iid, base, offset, isComputed, isOpAssign, isMethodCall) {
                        var desc = getPropertyDescriptor(base,offset);
                        //console.log("get",offset,xssProps.includes(offset.toString()))
                        if (xssProps.includes(offset.toString())){
                                //console.log("done get",callStack.length,getLoc(callStack[callStack.length-1]),offset)
                                /*callerIid =  getLoc(currFunStack[currFunStack.length-2]) === undefined? "system (Native)":  getLoc(currFunStack[currFunStack.length-2])
                                calleeIid = getLoc(currFunStack[currFunStack.length-1]) 
                                if (!(callerIid in callerToCallee)) {
                                        callerToCallee[callerIid] = [];
                                }
        
                                calleeIids = callerToCallee[callerIid];
                                if (!calleeIids.includes(calleeIid)) {
                                        calleeIids.push(calleeIid);
                                }*/
                                jsonFunList.add(getLoc(currFunStack[currFunStack.length-1]))
                        }
                        if(isGetter(base,offset)){
                                console.log("here get",base,offset)
                                var giid = J$.getGlobalIID(iid);
                                setterGetter.push(giid);
                                iidToCallerLoc[getPropSafe(desc.get, SPECIAL_PROP_SID)+":"+getPropSafe(desc.get, SPECIAL_PROP_IID)]=giid;
                        }
                },
                putFieldPre : function (iid, base, offset, val, isComputed, isOpAssign) {
                        var desc = getPropertyDescriptor(base,offset);
                        //console.log("put",offset,xssProps.includes(offset.toString()))
                        if (xssProps.includes(offset.toString())){
                                /*console.log("done put",currFunStack.length)
                                callerIid =  getLoc(currFunStack[currFunStack.length-2]) === undefined? "system (Native)":  getLoc(currFunStack[currFunStack.length-2])
                                calleeIid = getLoc(currFunStack[currFunStack.length-1]) 
                                if (!(callerIid in callerToCallee)) {
                                        callerToCallee[callerIid] = [];
                                }
        
                                calleeIids = callerToCallee[callerIid];
                                if (!calleeIids.includes(calleeIid)) {
                                        calleeIids.push(calleeIid);
                                }*/
                                jsonFunList.add(getLoc(currFunStack[currFunStack.length-1]))
                        }
                        if(isSetter(base,offset)){
                                var giid = J$.getGlobalIID(iid);
                                setterGetter.push(giid)
                                iidToCallerLoc[getPropSafe(desc.set, SPECIAL_PROP_SID)+":"+getPropSafe(desc.get, SPECIAL_PROP_IID)]=giid;

                        }
                },
                /**
                 * @desc Identifies the calling locations for the non-native functions and calls to native functions
                 * during a function, method, or constructor invocation.
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {function} f - The function object that going to be invoked
                 * @param {object} base - The receiver object for the function <tt>f</tt>
                 * @param {Array} args - The array of arguments passed to <tt>f</tt>
                 * @param {boolean} isConstructor - True if <tt>f</tt> is invoked as a constructor
                 * @param {boolean} isMethod - True if <tt>f</tt> is invoked as a method
                 * @param {number} functionIid - The iid (i.e. the unique instruction identifier) where the function was created
                 * @param {number} functionSid - The sid (i.e. the unique script identifier) where the function was created
                 * @returns {undefined} - Any return value is ignored
                 */
                invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
                        var funName = f.name;
                        var giid = J$.getGlobalIID(iid);
                        var fgiid = functionSid+":"+functionIid;
                        funName = funName == "bound " ? "bound anon" : funName;
                        iidToFunName[giid] = funName == "" ? "anon" : funName;
                        console.log("here1",funName,getLoc(giid),getLoc(fgiid))
                        if (functionIid!==undefined){
                                iidToCallerLoc[fgiid] = giid;
                        }
                        //Identifying Non-native -> Native Calls
                        if (f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0 || listXss.includes(f)) {
                                callerIid = getLoc(giid);
                                if (["apply","call"].includes(funName) || funName.startsWith("bound ")){   
                                        applyStack.push(giid)
                                        calleeIid = iidToFunName[giid] + " (Native)" + " [" + getLoc(giid)+"]"
                                }
                                else{
                                        
                                        calleeIid = iidToFunName[giid] + " (Native)"
                                }

                                //Adding the caller and the callee to the call edge list
                        }else{
                                console.log("here",callStack,iidToFunName[callStack[callStack.length - 1]],getLoc(iidToCallerLoc[fgiid]))
                                if (currFunStack.length === 0) {
                                        callerName = "system";
                                }
                                else {
                                        callerName = iidToFunName[currFunStack[currFunStack.length - 1]];
                                }
                                if (iidToCallerLoc[fgiid] == undefined) {

                                        if (f.name.startsWith("set ") || f.name.startsWith("get ")){
                                                //Identifying Setters/Getters -> Non-native Calls  
                                                callerIid = getLoc(setterGetter[setterGetter.length - 1]);
        
                                        }
                                        else{
                                                //Identifying Native -> Non-native Calls
                                                if ((["apply","call"].includes(callerName) || callerName.startsWith("bound ")) && applyStack.length>0){  
                                                        var apcal_loc= applyStack[applyStack.length - 1];   
                                                        callerIid = callerName + " (Native)" + " [" + getLoc(apcal_loc) +"]" ;
                                                }
                                                else{
                                                        callerIid = callerName + " (Native)"
                                                }
        
                                        }
                                }
                                //Identifying Non-native -> Non-native Calls
                                else {
                                        callerIid = getLoc(iidToCallerLoc[fgiid]);
        
                                }

                                calleeIid = getLoc(fgiid);

                        }
                        if (!(callerIid in callerToCallee)) {
                                callerToCallee[callerIid] = [];
                        }

                        calleeIids = callerToCallee[callerIid];
                        if (!calleeIids.includes(calleeIid)) {
                                calleeIids.push(calleeIid);
                        }

                        //if(){
                        //callStack.push(giid);
                        //}
                        delete iidToCallerLoc[fgiid]
                },

                /**
                 * @desc Identifies the calls to non-native functions when the execution 
                 * of a function body starts.
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {function} f - The function object whose body is about to get executed
                 * @param {*} dis - The value of the <tt>this</tt> variable in the function body
                 * @param {Array} args - List of the arguments with which the function is called
                 * @returns {undefined} - Any return value is ignored
                 */
                /*read: function(iid, name, val, isGlobal, isScriptLocal){
                        console.log("reading",name,val)
                },*/
                functionEnter: function (iid, f, dis, args) {
                        var giid = J$.getGlobalIID(iid);
                        currFunStack.push(giid)
                        /*var funName = f.name;
                        var giid = J$.getGlobalIID(iid);
                        iidToFunName[giid] = funName == "" ? "anon" : funName;
                        console.log("fenter",f.name,getLoc(giid),callStack.length,iidToFunName[callStack[callStack.length - 1]])
                        //If the CallStack is empty, when a function is called , the caller name is assigned as "system"
                        if (callStack.length === 0) {
                                callerName = "system";
                        }
                        else {
                                callerName = iidToFunName[callStack[callStack.length - 1]];

                        }
                        if (iidToCallerLoc[giid] == undefined) {

                                if (f.name.startsWith("set ") || f.name.startsWith("get ")){
                                        //Identifying Setters/Getters -> Non-native Calls  
                                        callerIid = getLoc(setterGetter[setterGetter.length - 1]);

                                }
                                else{
                                        //Identifying Native -> Non-native Calls
                                        if ((["apply","call"].includes(callerName) || callerName.startsWith("bound ")) && applyStack.length>0){  
                                                var apcal_loc= applyStack[applyStack.length - 1];   
                                                callerIid = callerName + " (Native)" + " [" + getLoc(apcal_loc) +"]" ;
                                        }
                                        else{
                                                callerIid = callerName + " (Native)"
                                        }

                                }
                        }
                        //Identifying Non-native -> Non-native Calls
                        else {
                                callerIid = getLoc(iidToCallerLoc[giid]);

                        }

                        //Adding the caller and the callee to the call edge list
                        calleeIid = getLoc(giid);

                        if (!(callerIid in callerToCallee)) {
                                callerToCallee[callerIid] = [];
                        }

                        calleeIids = callerToCallee[callerIid];
                        if (!calleeIids.includes(calleeIid)) {
                                calleeIids.push(calleeIid);
                        }

                        delete iidToCallerLoc[giid]
                        callStack.push(giid);*/
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
                        var giid = J$.getGlobalIID(iid);
                        /*if (callStack[callStack.length - 1] == giid) {
                                callStack.pop();
                        }*/
                        if (applyStack[applyStack.length - 1] == giid) {
                                applyStack.pop();
                        }
                        
                },
                /**
                 * @desc Removes the top element of the CallStack when the execution of a function body completes
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {*} returnVal - The value returned by the function
                 * @param {{exception:*} | undefined} wrappedExceptionVal - If this parameter is an object, the function
                 * execution has thrown an uncaught exception and the exception is being stored in the <tt>exception</tt>
                 * property of the parameter
                 * @returns {undefined} - Any return value is ignored
                 */
                functionExit: function (iid, returnVal, wrappedExceptionVal) {
                        currFunStack.pop();
                },
                /**
                 * @desc Removes the top element of the CallStack when the execution of a JavaScript file completes
                 * @param {number} iid - Static unique instruction identifier of this callback
                 * @param {{exception:*} | undefined} wrappedExceptionVal - If this parameter is an object, the function
                 * execution has thrown an uncaught exception and the exception is being stored in the <tt>exception</tt>
                 * property of the parameter
                 * @returns {undefined} - Any return value is ignored
                 */
                /*scriptExit: function (iid, wrappedExceptionVal) {
                        currFunStack.pop();
                },*/
                /**
                 * @desc Writes the output to a json file 
                 * @returns {undefined} - Any return value is ignored
                 */
                endExecution: function () {
                        //Generating the final output
                        for (caller in callerToCallee) {
                                if (!(caller in jsonCallList)){
                                        jsonCallList[caller]=callerToCallee[caller];
                                        }
                        }
                        //Writing the output to a file
                        /*if (!isBrowser) {
                                var jsonString = JSON.stringify(jsonCallList,null,4)
                                origName = process.argv[1];
                                instname = origName.replace(/.js$/, "_dynCalls.json");
                                fs.writeFileSync(instname, jsonString, function(err) {
                                        if(err) console.log('error', err);
                                      });
                        }*/
                        J$.outList=[jsonCallList,jsonFunList]
                        console.log(jsonCallList)
                        console.log(jsonFunList)
                        return J$.outList
                }

        };

}());

/*
node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis DynNative.js experiments/example.js
node src/js/commands/instrument.js --inlineIID --inlineSource -i --inlineJalangi --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/sample_analyses/dlint/Utils.js --analysis DynNative.js --outputDir /tmp experiments/html/
open file:///tmp/html/index.html
*/