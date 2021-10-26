(function(){
  var funCall = {};
  var	allocCount=	{};
  var fs = require('fs');
  var callStack="";
  var iidToFunName = Object.create(null);
  var txt="";
  var cnt=0;
  var jsonObj=Object.create(null);
  
  
  J$.analysis = {
	scriptEnter: function (iid, instrumentedFileName, originalFileName) {
            txt+="Dynamic fuction calls for "+ originalFileName.split("/").pop() +" are as follows: \n"
            console.log("Dynamic fuction calls for "+ originalFileName.split("/").pop() +" are as follows:")
            iidToFunName[iid] = require('path').basename(originalFileName);
            callStack.push(iid);
        },

	functionEnter: function (iid, f, dis, args) {
			var id=J$.getGlobalIID(iid);
			var funName = f.name;
			iidToFunName[iid] = funName==""?"Unnamed Function":funName;
            var caller = callStack[callStack.length - 1];
            var callerId=J$.getGlobalIID(caller);
            var callerName= iidToFunName[caller];
            /*console.log("iid  " +iid);
            console.log("caller"+ caller);*/
			console.log("Calling "+ iidToFunName[iid] + " at " + J$.iidToLocation(id).split(":")[1] +" from " + callerName + " at "+ J$.iidToLocation(callerId).split(":")[1]);
			callStack.push(iid)
			txt+="Calling "+ iidToFunName[iid] + " at " + J$.iidToLocation(id).split(":")[1] +" from " + callerName + " at "+ J$.iidToLocation(callerId).split(":")[1] +"\n";
            cnt++;
            
        },

	functionExit: function (iid, returnVal, wrappedExceptionVal) {
            callStack.pop();
        },

    endExecution: function () {
                    txt+="Number of functions calls: "+ cnt+"\n"
                    console.log("Number of functions calls: "+ cnt);
                    console.log(iidToFunName)
                    var origName=process.argv[1];
                    var instname=origName.replace(/.js$/, "dyncalls_indiv.txt");
                    fs.writeFileSync(instname,txt);
                    //require('fs').writeFileSync(scriptName + '.json', JSON.stringify(cg, undefined, 2), 'utf8');
                }
            }
}());
""
