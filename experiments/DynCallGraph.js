(function(){
  var isBrowser = J$.Constants.isBrowser;
  var fs;
  var start,end;
  var fileName;
  var callStack=[];
  var applyStack=[];
  var callList=Object.create(null);
  var iidToFunName = Object.create(null);
  var iidToCallerLoc=Object.create(null);
  var jsonCallList=Object.create(null);
  var txt="";
  var cnt=0;
  var instname="";
  var newarr = [];
  var newarr2=[];
  /*var charSpace= (row,col) =>{
    cnt=0;
    for (k=0;k<row-1;k++){
      cnt+=newarr2[k].length;
    }
    cnt+=col-1;
    return cnt
  }*/
  J$.analysis = {

    scriptEnter: function (iid, instrumentedFileName, originalFileName) {
      fileName=originalFileName.split("/").pop();
      if (!isBrowser){
          fs = require('fs');
          /*newarr=fs.readFileSync(process.argv[1]).toString().split("\n");
          for (i=0;i<newarr.length;i++){
            newarr[i]+="\n";
            newarr2.push(newarr[i].split(""));
          }*/
        }
        if (originalFileName!="evalIndirect"){
          iidToFunName[iid] = 'global';
          callStack.push(iid);
      }
        },

    invokeFunPre: function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid){
        
        var id=J$.getGlobalIID(iid);
        var funName = f.name;
        //console.log(J$.iidToLocation(id).split(":")[1],J$.iidToLocation(id).split(":")[2]);
        //start=charSpace(J$.iidToLocation(id).split(":")[1],J$.iidToLocation(id).split(":")[2]);
        //end=charSpace(J$.iidToLocation(id).split(":")[3],J$.iidToLocation(id).split(":")[4].slice(0,-1));
        //console.log(iid,iidToFunName[iid],functionIid,);
        iidToFunName[iid] = funName==""?"anon":funName;
        iidToCallerLoc[functionIid] = J$.iidToLocation(id);//.split("/").slice(-1)).toString().split(":").slice(0,1)+"@"+J$.iidToLocation(id).split(":").slice(1);//+":"+start+"-"+end;
        //callStack=iid
        //["apply","call"].includes(funName) && 
        if ((f.toString().indexOf('[native code]') > -1 || f.toString().indexOf('[object ') === 0)){
          //applyStack.push([iid,J$.iidToLocation(id)]);
          applyStack.push([f.name,J$.iidToLocation(id)]);
          cnt+=1;
          }
      },
  
      functionEnter: function (iid, f, dis, args) {
      var id=J$.getGlobalIID(iid);
      var funName = f.name;
      iidToFunName[iid] = funName==""?"anon":funName;
      var caller = callStack[callStack.length - 1];
      var callerName= iidToFunName[caller];
      callStack.push(iid);
            //cnt++;
            /*if (iidToCallerLoc[iid]==undefined){
            callerKey="'"+callerName+"' "+"("+iidToCallerLoc[iid]+")"
            }
            else{
            callerKey="'"+callerName+"' "+"("+iidToCallerLoc[iid];
            }*/
            callerKey=callerName+" "+iidToCallerLoc[iid];
            if(applyStack.length>0){
              //callerKey="'"+callerName+"' "+"("+applyStack[applyStack.length - 1][1]+" Apply ";
              callerKey="'"+applyStack[applyStack.length - 1][0]+"' " +applyStack[applyStack.length - 1][1];
              applyStack.pop();            
            }
            //start=charSpace(J$.iidToLocation(id).split(":")[1],J$.iidToLocation(id).split(":")[2]);
            //end=charSpace(J$.iidToLocation(id).split(":")[3],J$.iidToLocation(id).split(":")[4].slice(0,-1));
            //console.log(J$.iidToLocation(id).split("/"));
            //console.log(callerName,(J$.iidToLocation(id).split("/").slice(-1)).toString().split(":").slice(0,1));
            calleeValue=iidToFunName[iid]+" "+ J$.iidToLocation(id);//.split("/").slice(-1)).toString().split(":").slice(0,1)+"@"+J$.iidToLocation(id).split(":").slice(1);//+":"+start+"-"+end+")";
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
      //applyStack="";            
    }
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
                  console.log(cnt)
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
                      fs.writeFileSync(instname, JSON.stringify(jsonCallList, undefined, 2), 'utf8');
                      }
                  }
                }
            }
}());
""
