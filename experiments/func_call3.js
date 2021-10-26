(function(){
    var funCall = {};
    var	allocCount=	{};
    var fs = require('fs');
    var callStack=[];
    var iidToFunName = Object.create(null);
    var txt="";
    var cnt=0;
    var iidToCallingLoc=Object.create(null);
    J$.analysis = {
  
      scriptEnter: function (iid, instrumentedFileName, originalFileName) {
              //txt+="Dynamic fuction calls for "+ originalFileName.split("/").pop() +" are as follows: \n"
              //console.log("Dynamic function calls for "+ originalFileName.split("/").pop() +" are as follows:")
              iidToFunName[iid] = require('path').basename(originalFileName);
              callStack.push(iid);
              //console.log(callStack )
          },
      invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid){
          console.log("invoke");
          var id=J$.getGlobalIID(iid);
          var fid=J$.getGlobalIID(functionIid);
          var funName = f.name;
          iidToFunName[iid] = funName==""?"Unnamed Function":funName;
          iidToCallingLoc[functionIid] = iid;
          var caller = callStack[callStack.length - 1];
          //var fSid= J$.iidToLocation(fid).split(":")[1];
          //var callerId=J$.getGlobalIID(caller);
          //var callerName= iidToFunName[caller];
          //console.log(iidToCallingLoc[iid]);
          //callStack.push(iid);
          cnt++;
          //} 
          console.log("Function  "+iidToFunName[iid]+" at "+ J$.iidToLocation(id).split(":")[1]+" calls "+fSid);   
        
      },
      /*runInstrumentedFunctionBody: function (iid, f, functionIid, functionSid){
            console.log("calling");
            console.log(f+" "+functionIid+" "+functionSid+" "+iid);
       },*/
       /*functionExit: function (iid, returnVal, wrappedExceptionVal) {
        //callStack.pop();
    },*/
    invokeFun: function (iid, returnVal, wrappedExceptionVal) {
        callStack.pop();
    },

     /*functionEnter: function (iid, f, dis, args) {
        var id=J$.getGlobalIID(iid);
        var funName = f.name;
        iidToFunName[iid] = funName==""?"Unnamed Function":funName;
        var caller = callStack[callStack.length - 1];
        var callerId=J$.getGlobalIID(caller);
        var callerName= iidToFunName[caller];
        //console.log("enter");
        //console.log("iid  " +iid);
        console.log(iidToCallingLoc[iid]);
        //console.log(" getting called from " + callerName + " at "+ J$.iidToLocation(callerId).split(":")[1]);
        //callStack.push(iid)
        //txt+="Calling "+ iidToFunName[iid] + " at " + J$.iidToLocation(id).split(":")[1] +" from " + callerName + " at "+ J$.iidToLocation(callerId).split(":")[1] +"\n";
        cnt++;
    },*/

      endExecution: function () {
                      txt+="Number of functions calls: "+ cnt+"\n"
                      console.log("Number of functions calls: "+ cnt);
                      var origName=process.argv[1];
                      //var instname=origName.replace(/.js$/, "dyncalls_invoke.txt");
                      //fs.writeFileSync(instname,txt);
                  }
              }
  }());
  ""
  