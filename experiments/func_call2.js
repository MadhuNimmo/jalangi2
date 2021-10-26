(function(){
    var fs = require('fs');
    var callStack=[];
    var iidToFunName = Object.create(null);
    var txt="";
    var cnt=0;
    var callList=Object.create(null);
    var jsonCallList=Object.create(null);
    var iidToCallerLoc=Object.create(null);
    var fileName="";
    var format="";
    var instname="";
    var cnt=0;
    var visitedIid=[];
    var enterFlag=false;
    var invokeFunPreFlag=false;
    var lastFid=undefined;
    var unknownCallFlag=false;
    J$.analysis = {
  
      scriptEnter : function (iid, instrumentedFileName, originalFileName) {
              fileName=originalFileName.split("/").pop()
              iidToFunName[iid] = require('path').basename(originalFileName);
              callStack.push(iid);
          },

      invokeFunPre : function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid){
            var id=J$.getGlobalIID(iid);
            var funName = f.name;
            iidToFunName[iid] = funName==""?"Unnamed Function":funName;
            iidToCallerLoc[functionIid] = J$.iidToLocation(id).split(":").slice(1);//iid
            if (functionIid==undefined){
              //invokeFunPreFlag=true;
              //lastFid=J$.iidToLocation(J$.getGlobalIID(iid)).split(":").slice(1);
              //console.log("last ")//+lastFid)
              unknownCallFlag=true;
              //console.log("last "+lastFid)
             }
            if ((f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0)){
              //invokeFunPreFlag=true;
            callingLoc=callStack[callStack.length - 1];
            callerName=iidToFunName[callingLoc];
            iidToCallerLoc[iid]= J$.iidToLocation(J$.getGlobalIID(callingLoc)).split(":").slice(1);
            //console.log(iidToCallerLoc)
            callerKey=callerName +"@" + J$.iidToLocation(id).split(":").slice(1);
            calleeValue=iidToFunName[iid]+"@"+J$.iidToLocation(id).split(":").slice(1)
            if (!(callerKey in callList)){
              callList[callerKey]=[];
          }
          if (!(callList[callerKey].includes(calleeValue))){
          callList[callerKey].push(calleeValue);
          }
        //}
        //else {
        //}
            callStack.push(iid);
            invokeFunPreFlag=true;
        }
      //}
      
      },
      functionEnter : function (iid, f, dis, args) {
              var id=J$.getGlobalIID(iid);
              enterFlag=true;
              var funName = f.name;
              iidToFunName[iid] = funName==""?"Unnamed Function":funName;
              //console.log(iid,f.name)
              callingLoc=callStack[callStack.length - 1];
              //console.log(callStack)
              //console.log(iidToCallerLoc[iid],iidToFunName[iidToCallerLoc[iid]]);
              callerName=iidToFunName[callingLoc];//[callingLoc];
              //console.log(callerName)
              
              //cnt++;
              if (iidToCallerLoc[iid]==undefined){//iidToCallerLoc[undefined]!=undefined){//lastFid!=undefined){
              console.log("here "+callingLoc);
              callerKey=callerName +"@" + J$.iidToLocation(J$.getGlobalIID(callingLoc)).split(":").slice(1)//iidToCallerLoc[undefined]//lastFid ;
              //lastFid=undefined
              //iidToCallerLoc[undefined]=undefined
              }
              else{
                callerKey=callerName +"@" + iidToCallerLoc[iid];
              }

            calleeValue=iidToFunName[iid]+"@"+J$.iidToLocation(id).split(":").slice(1)
            //console.log(J$.iids[iid])
            if (!(callerKey in callList)){
              //console.log("here"+cnt)
              callList[callerKey]=[];
          }
          if (!(callList[callerKey].includes(calleeValue))){
          callList[callerKey].push(calleeValue);
          }
            callStack.push(iid);
        //}
          },
      invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
        if (callStack[callStack.length - 1]==iid ){//&& (f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0)){
          //console.log("pop"+f.name)  
        //console.log(iid,f.name,functionIid) 
        //if(invokeFunPreFlag){
          /*console.log("pop")  
        console.log(iid,f.name,functionIid) */
      callStack.pop()
        }
      //invokeFunPreFlag=false;
        //}
    },
      functionExit :  function (iid, returnVal, wrappedExceptionVal) {
        //console.log(callStack)
        //if (callStack[callStack.length - 1]==iid ){
        //console.log("pop"+ iid)
        callStack.pop()   
        //enterFlag=false;
        //}
          },
  
      endExecution : function () {
                      console.log(callList)
                      console.log(iidToFunName)
                      //txt+="Dynamic fuction calls for "+ fileName+" consolidated: \n"
                      for (caller in callList){
                      //txt+=caller + " calls: \n"
                      //jsonObj[caller]=callList[caller];
                      
                      for (var i = 0; i < callList[caller].length; i++) {
                            //console.log(callList[caller][i]);
                            console.log(caller + "->" +callList[caller][i]+"\n");
                            }
                        }
                      txt+="Number of function calls: "+ cnt
                      var origName=process.argv[1];
                      if (process.argv[2]==undefined){
                            format="t"
                      }
                      else{
                            format=process.argv[2]
                      }
                      txt+="Number of functions calls: "+ cnt+"\n"
                      //console.log("Number of functions calls: "+ cnt);
                      //console.log(cnt)
                      if (format=="t"){
                      instname=origName.replace(/.js$/, "_dyncalls_conso.txt");
                      //fs.writeFileSync(instname,txt);}
                      }
                      else{
                      instname=origName.replace(/.js$/, "_dyncalls_conso.json");
                      //fs.writeFileSync(instname, JSON.stringify(jsonCallList, undefined, 2), 'utf8');
                      }
                    //return cnt;
                  }
              };
  }());
  