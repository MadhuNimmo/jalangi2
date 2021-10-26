(function(){
    var isBrowser = J$.Constants.isBrowser;
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
    var origName="";
    var fs;
    J$.analysis = {
  
      scriptEnter : function (iid, instrumentedFileName, originalFileName) {
        fileName=originalFileName.split("/").pop();
        
            if (!isBrowser){
              fs = require('fs'); 
              //origName=fileName;
            }
              iidToFunName[iid] = fileName//require('path').basename(originalFileName);
              callStack.push(iid);
          },

      invokeFunPre : function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid){
            var id=J$.getGlobalIID(iid);
            //var fid=J$.getGlobalIID(functionIid);
            var funName = f.name;
            iidToFunName[iid] = funName==""?"Unnamed Function":funName;
            iidToCallerLoc[functionIid] = J$.iidToLocation(id).split(":")[1];
            
        },
  
      functionEnter : function (iid, f, dis, args) {
              var id=J$.getGlobalIID(iid);
              var funName = f.name;
              iidToFunName[iid] = funName==""?"Unnamed Function":funName;
              var caller = callStack[callStack.length - 1];
              var callerName= iidToFunName[caller];
              callStack.push(iid);
              cnt++;
              callerKey=callerName +" defined at " + iidToCallerLoc[iid] ;
              calleeValue= iidToFunName[iid] + " defined at " + J$.iidToLocation(id).split(":")[1];
              jsonCallerKey=callerName+"@"+iidToCallerLoc[iid];
              jsonCalleeValue=iidToFunName[iid] + "@" + J$.iidToLocation(id).split(":")[1];
              if (!(callerKey in callList)){
                  callList[callerKey]=[];
              }
              if (!(callList[callerKey].includes(calleeValue))){
              callList[callerKey].push(calleeValue);
              }
              if (!(jsonCallerKey in jsonCallList)){
                jsonCallList[jsonCallerKey]=[];
              }
              if (!(jsonCallList[jsonCallerKey].includes(jsonCalleeValue))){
                jsonCallList[jsonCallerKey].push(jsonCalleeValue);
              }
             
          },
  
      functionExit :  function (iid, returnVal, wrappedExceptionVal) {
              callStack.pop();
          },
      //new
      /*scriptExit :  function (iid, wrappedExceptionVal) {
        callStack.pop();
        /*console.log("Dynamic function calls for "+ fileName+" consolidated:")
        txt+="Dynamic fuction calls for "+ fileName+" consolidated: \n"
        for (caller in callList){
        txt+=caller + " calls the following: \n";
        console.log(caller + " calls the following: ");
        for (var i = 0; i < callList[caller].length; i++) {
              console.log(callList[caller][i]);
              txt+=callList[caller][i]+"\n"
              }
          }
        //txt+="Number of function calls: "+ cnt
        txt+="Number of functions calls: "+ cnt+"\n"
        console.log("Number of functions calls: "+ cnt);
        if (!isBrowser){
          var origName=process.argv[1];
          if (process.argv[2]==undefined){
                format="t";
          }
          else{
                format=process.argv[2];
          }
          if (format=="t"){
            if (origName.includes("_jalangi_")){
              instname = origName.replace(/.js$/, "_dyncalls_conso.txt");
            }
            else{
              instname = origName.replace(/.js$/, "_jalangi_dyncalls_conso.txt");
            }
            fs.writeFileSync(instname,txt);}
            else{
              if (origName.includes("_jalangi_")){
                instname = origName.replace(/.js$/, "_dyncalls_conso.json");
              }
              else{
                instname = origName.replace(/.js$/, "_jalangi_dyncalls_conso.json");
              }
            fs.writeFileSync(instname, JSON.stringify(jsonCallList, undefined, 2), 'utf8');
            }
        }
        txt="";
        //clear(callList);
        callList={};
    },*/
  
      endExecution : function () {
                      console.log("Dynamic function calls for "+ fileName+" consolidated:")
                      txt+="Dynamic fuction calls for "+ fileName+" consolidated: \n"
                      console.log(callList)
                      for (caller in callList){
                      txt+=caller + " calls the following: \n";
                      console.log(caller + " calls the following: ");
                      for (var i = 0; i < callList[caller].length; i++) {
                            console.log(callList[caller][i]);
                            txt+=callList[caller][i]+"\n"
                            }
                        }
                      txt+="Number of functions calls: "+ cnt+"\n"
                      console.log("Number of functions calls: "+ cnt);
                      if (!isBrowser){
                        var origName=process.argv[1];
                        if (process.argv[2]==undefined){
                              format="t";
                        }
                        else{
                              format=process.argv[2];
                        }
                        if (format=="t"){
                          if (origName.includes("_jalangi_")){
                            instname = origName.replace(/.js$/, "_dyncalls_conso.txt");
                          }
                          else{
                            instname = origName.replace(/.js$/, "_jalangi_dyncalls_conso.txt");
                          }
                          fs.writeFileSync(instname,txt);}
                          else{
                            if (origName.includes("_jalangi_")){
                              instname = origName.replace(/.js$/, "_dyncalls_conso.json");
                            }
                            else{
                              instname = origName.replace(/.js$/, "_jalangi_dyncalls_conso.json");
                            }
                          fs.writeFileSync(instname, JSON.stringify(jsonCallList, undefined, 2), 'utf8');
                          }
                      }
                      }
                      
              };
  }());
  