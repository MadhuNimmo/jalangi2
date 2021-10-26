// Adapted from https://github.com/SRA-SiliconValley/jalangi/blob/master/src/js/analyses/callgraph/CallGraphEngine.js
// Author: Max Schlueter

(function (sandbox) {
    var iidToLocation = sandbox.iidToLocation;
    var getid	= sandbox.getGlobalIID;	
    var iids = sandbox.iids;
    var sid="";

    function CallGraphEngine() {

        this.endExecution = function () {
            var cg = Object.create(null);
            console.log(callerIidToCalleeIidsMap)
            
        }

        var callerIidToCalleeIidsMap = Object.create(null); // caller iid => callee iid
        var iidToFunName = Object.create(null); // function iid => function name
        var iidToCallerLoc = Object.create(null); // function iid => caller iid
        var callStack = [];
        var scriptName="";

        this.scriptEnter = function (iid, instrumentedFileName, originalFileName) {
            iidToFunName[iid] = require('path').basename(originalFileName);
            callStack.push(iid);
            scriptName=require('path').basename(originalFileName);
        }

        this.invokeFunPre = function (iid, fun, base, args, isConstructor, isMethod, functionIid, functionSid) {
            var funName = fun.name;
            sid=functionSid;
            iidToFunName[iid] = funName==""?"anon":funName;
            iidToCallerLoc[functionIid] = iid;
            if ((fun.toString().indexOf('[native code]') > -1 || fun.toString().indexOf('[object ') === 0)){
            var callerIid = iidToFunName[callStack[callStack.length - 1]]+"@"+scriptName+":"+J$.iids[iid]//iidToLocation(getid(iid));
            var calleeIid = iidToFunName[iid]+"@"+scriptName+":"+J$.iids[iid]//iidToLocation(getid(iid))+"(Native)";
            if (!(callerIid in callerIidToCalleeIidsMap)) {
                callerIidToCalleeIidsMap[callerIid] = [];
            }

            var calleeIids = callerIidToCalleeIidsMap[callerIid];
            if (!calleeIids.includes(calleeIid)) {
                calleeIids.push(calleeIid);
            }

            callStack.push(iid);
        }
        }

        this.functionEnter = function (iid, fun, dis /* this */, args) {
            var funName = fun.name;
            iidToFunName[iid] = funName==""?"anon":funName;
            console.log(iid,funName,J$.iids[iid].join(","))
            var callerIid = iidToFunName[callStack[callStack.length - 1]]+"@"+scriptName+":"+J$.iids[iidToCallerLoc[iid]]//iidToLocation(sid,iidToCallerLoc[iid]);//callStack[callStack.length - 1];
            var calleeIid = iidToFunName[iid]+"@"+scriptName+":"+J$.iids[iid]//iidToLocation(sid,iid);
            if (!(callerIid in callerIidToCalleeIidsMap)) {
                callerIidToCalleeIidsMap[callerIid] = [];
            }

            var calleeIids = callerIidToCalleeIidsMap[callerIid];
            if (!calleeIids.includes(calleeIid)) {
                calleeIids.push(calleeIid);
            }

            callStack.push(iid);
        }

        this.invokeFun = function (iid, returnVal, wrappedExceptionVal) {
            if (callStack[callStack.length - 1]==iid ){
            callStack.pop();
            }
        }
        this.functionExit = function (iid) {
            callStack.pop();
        }
        this.scriptExit = function (iid) {
            callStack.pop();
            return false;
        }
        

    }

    sandbox.analysis = new CallGraphEngine();
}(J$));