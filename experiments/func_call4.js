(function(){
    var fs = require('fs');
    var callStack=[];
    var iidToFunName = Object.create(null);
    var iidToCallerLoc=Object.create(null);
    var jsonCallList=Object.create(null);
    var txt="";
    var cnt=0;
    var instname="";
    J$.analysis = {
  
      scriptEnter: function (iid, instrumentedFileName, originalFileName) {
              txt+="Dynamic fuction calls for "+ originalFileName.split("/").pop() +" are as follows: \n"
              console.log("Dynamic function calls for "+ originalFileName.split("/").pop() +" are as follows:")
              iidToFunName[iid] = originalFileName//require('path').basename(originalFileName);
              callStack.push(iid);
          },

      invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid){
          
          var id=J$.getGlobalIID(iid);
          var fid=J$.getGlobalIID(functionIid);
          var funName = f.name;
          iidToFunName[iid] = funName==""?"Unnamed Function":funName;
          iidToCallerLoc[functionIid] = J$.iidToLocation(id).split(":")[1];
          
      },
    
        functionEnter: function (iid, f, dis, args) {
        var id=J$.getGlobalIID(iid);
        var funName = f.name;
        iidToFunName[iid] = funName==""?"Unnamed Function":funName;
        var caller = callStack[callStack.length - 1];
        //var callerId=J$.getGlobalIID(caller);
        var callerName= iidToFunName[caller];
        if (!(iid in iidToCallerLoc)) {
            iidToCallerLoc[iid]="Unknown Location";
         }
        txt+="Calling "+ iidToFunName[iid] + " at " + J$.iidToLocation(id).split(":")[1] +" from " + callerName + " at "+ iidToCallerLoc[iid];
        console.log("Calling "+ iidToFunName[iid] + " at " + J$.iidToLocation(id).split(":")[1] +" from " + callerName + " at "+ iidToCallerLoc[iid]);
        callStack.push(iid);
        cnt++;
        jsonCallList[cnt]=[callerName + "@"+ iidToCallerLoc[iid],iidToFunName[iid] + "@" + J$.iidToLocation(id).split(":")[1]]
        
    },

    functionExit: function (iid, returnVal, wrappedExceptionVal) {
        callStack.pop();
    },
   
      endExecution: function () {
                      var origName=process.argv[1];
                      if (process.argv[2]==undefined){
                                format="t"
                        }
                        else{
                                format=process.argv[2]
                        }
                      txt+="Number of functions calls: "+ cnt+"\n";
                      console.log("Number of functions calls: "+ cnt);
                      //console.log(cnt);
                      if (format=="t"){
                        instname = origName.replace(/.js$/, "_dyncalls_indiv.txt");
                        fs.writeFileSync(instname,txt);}
                        else{
                        instname = origName.replace(/.js$/, "_dyncalls_indiv.json");
                        fs.writeFileSync(instname, JSON.stringify(jsonCallList, null, 2), 'utf8');
                        
                        }
                      //return cnt;
                  }
              }
  }());
  ""
  