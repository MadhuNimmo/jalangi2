(function(){
    var isBrowser = J$.Constants.isBrowser;
    var fs;
    var fileName;
    var callStack=[];
    var applyStack=[];
    //var apply="";
    var callList=Object.create(null);
    var iidToFunName = Object.create(null);
    var iidToCallerLoc=Object.create(null);
    var jsonCallList=Object.create(null);
    var txt="";
    var instname="";
    //var newFun=false;

    J$.analysis = {
  
      scriptEnter: function (iid, instrumentedFileName, originalFileName) {
        fileName=originalFileName.split("/").pop();
        //console.log(fileName)
        if (!isBrowser){
            fs = require('fs');
          }
          if (originalFileName!="evalIndirect"){
              iidToFunName[iid] = 'global';
              callStack.push(iid);
          }
          },

      invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid){
          
          var id=J$.getGlobalIID(iid);
          var funName = f.name;
          iidToFunName[iid] = funName==""?"anon":funName;
          regex=J$.iidToLocation(id).match(/(\S+)\.js\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/g)
          iidToCallerLoc[functionIid] = (J$.iidToLocation(id).split("/").slice(-1)).toString().split(":").slice(0,1) +"@"+regex.toString().split(":").slice(-4);//+"?"+J$.iidToLocation(id);//J$.iidToLocation(id).match(/(\S+)\@([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/);//.split(":").slice(1);
          if (["apply","call"].includes(funName) && (f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0)){
          applyStack.push([iid,(J$.iidToLocation(id).split("/").slice(-1)).toString().split(":").slice(0,1) +"@"+regex.toString().split(":").slice(-4)]);
          //apply=(J$.iidToLocation(id).split("/").slice(-1)).toString().split(":").slice(0,1) +"@"+regex.toString().split(":").slice(-4);
          }
          /*if (funName=="Function"){
            newFun=true;
          }*/
      },
    
        functionEnter: function (iid, f, dis, args) {
        var id=J$.getGlobalIID(iid);
        var funName = f.name;
        iidToFunName[iid] = funName==""?"anon":funName;
        var caller = callStack[callStack.length - 1];
        var callerName= iidToFunName[caller];
              callStack.push(iid);
              if (iidToCallerLoc[iid]==undefined){
              callerKey="'"+callerName+"' "+"("+iidToCallerLoc[iid]+")"
              }
              else if (iidToCallerLoc[iid].startsWith("(")){
                callerKey="'"+callerName+"' "+iidToCallerLoc[iid];
                }
              else{
              callerKey="'"+callerName+"' "+"("+iidToCallerLoc[iid];
              }
              if(applyStack.length>0){
                callerKey="'"+callerName+"' "+"("+applyStack[applyStack.length - 1][1];//+" Apply ";
                applyStack.pop();            
              }
              /*if(apply!=""){
                callerKey="'"+callerName+"' "+"("+apply;
                apply="";            
              }*/
              regex=J$.iidToLocation(id).match(/(\S+)\.js\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/g)
              if (((J$.iidToLocation(id).split("/").slice(-1)).toString().split(":").slice(0,1)).toString().startsWith("(")){
                calleeValue="'"+iidToFunName[iid]+"' " + (J$.iidToLocation(id).split("/").slice(-1)).toString().split(":").slice(0,1)+"@"+regex.toString().split(":").slice(-4);//+"?"+J$.iidToLocation(id);//.split(":").slice(-4);//+":"+start+"-"+end+")";
              }
              else{
              calleeValue="'"+iidToFunName[iid]+"' " + "(" + (J$.iidToLocation(id).split("/").slice(-1)).toString().split(":").slice(0,1)+"@"+regex.toString().split(":").slice(-4);//+"?"+J$.iidToLocation(id);//.split(":").slice(-4);//+":"+start+"-"+end+")";
              }
              if (!(callerKey in callList)){
                  callList[callerKey]=[];
              }
              if (!(callList[callerKey].includes(calleeValue))){
              callList[callerKey].push(calleeValue);
              }
        
    },

    functionExit: function (iid, returnVal, wrappedExceptionVal) {
        callStack.pop();
    },
    invokeFun: function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
      /*if(newFun){
        callStack.pop()
        newFun=false;           
      }*/
      if(applyStack.length>0 && applyStack[applyStack.length - 1][0]==iid){
        applyStack.pop();            
      }
      /*if(apply==iid){
        apply="";            
      }*/
  },
      endExecution: function () {
                    for (caller in callList){
                            for (var i = 0; i < callList[caller].length; i++) {
                                console.log(caller+" -> "+callList[caller][i]);
                                txt+=caller+" -> "+callList[caller][i]+"\n"
                                if (!(callerKey in jsonCallList)){
                                    jsonCallList[caller]=callList[caller][i];
                                  }
                                }
                            }
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
                          instname = origName.replace(/.js$/, "_dynCalls.txt");
                        }
                        else{
                          instname = origName.replace(/.js$/, "_jalangi_dynCalls.txt");
                        }
                        fs.writeFileSync(instname,txt);}
                        else{
                          if (origName.includes("_jalangi_")){
                            instname = origName.replace(/.js$/, "_dynCalls.json");
                          }
                          else{
                            instname = origName.replace(/.js$/, "_jalangi_dynCalls.json");
                          }
                        fs.writeFile(instname, JSON.stringify(jsonCallList, undefined, 2), 'utf8');
                        }
                    }
                  }
              }
  }());
  ""
  