(function(){
  var funCall = {};
  var	allocCount=	{};
  var callStack=[];
  var iidToFunName = Object.create(null); // function iid => function name
  var bool="";
  J$.analysis = {
	
    /*InvokeFunPre : function (iid, base, f, args, isConstructor, isMethod) {
		console.log("calling")
		var id=J$.getGlobalIID(iid);
		//var 
		allocCount[id]={value:0};
		//var funcInfo = funCall[id];
		//if (funCall.f != undefined )
		//if (funCall.f != undefined ){
		//	console.log(funcInfo)
		console.log("function "+funCall.f+"with args "+funCall.args);
		//}
		if	(isMethod){
			//console.log("entry")
			allocCount[id].value++;
			console.log(id+"   "+f+" "+allocCount[id].value);
			
		}
        },*/
	scriptEnter: function (iid, instrumentedFileName, originalFileName) {
            iidToFunName[iid] = require('path').basename(originalFileName);
            callStack.push(iid);
        },
	functionEnter: function (iid, f, dis, args) {
			var id=J$.getGlobalIID(iid);
			//console.log("At "+iid+"the function "+id+" is called ");
			var funName = f.name;
			iidToFunName[iid] = funName==""?"Unnamed Function":funName;
			var caller = callStack[callStack.length - 1];
			var callerName= iidToFunName[caller];
			console.log("Calling "+ iidToFunName[iid] + " at " + J$.getGlobalIID(iid) +" from " + callerName + " at "+ caller);
			callStack.push(iid)
			bool=f.name;
        },
		
	functionExit: function (iid, returnVal, wrappedExceptionVal) {
            callStack.pop();
			//bool=true;
        },
		
	/*read: function (iid, name, val, isGlobal, isScriptLocal) {
            var id=J$.getGlobalIID(iid);
			//if (bool==false)
			if (typeof val=="function"){
			//console.log(iidToFunName[callStack[callStack.length - 1]]+"    "+name)
			//if(!(callStack.includes(iid))){
			//bool=true;
			//console.log("bool "+bool+" name "+ name)
			//if (name!=bool){
			console.log("READS: At "+J$.iidToLocation(id)+" the function "+name+" is called  ");
			//bool=name
			}
        },*/
        
    endExecution: function () {
                    console.log("end of execution  ");
                }
            }
}());
""