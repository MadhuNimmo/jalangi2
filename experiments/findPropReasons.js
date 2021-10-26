const fs = require('fs');

var output={}
var outPath=""
var outputCnt={}
outputCnt["GET"]={}
outputCnt["PUT"]={}
function findReason(strngSources, input) {
        output[input]={}
        output[input]["GET"]=[]
        output[input]["PUT"]=[]
        var inpIndex = srchItem(strngSources, input,"get")
        if (inpIndex == -1) {
                console.log("Item not found: "+ input)
        }else{    
                        var cnt=0;
                        for(var i=0; i<strngSources[inpIndex]["explanations"].length;i++){
                                output[input]["GET"].push(strngSources[inpIndex]["explanations"][i]["tag"])
                                if(strngSources[inpIndex]["explanations"][i]["tag"] == "CONSTANT"){
                                        cnt+=1
                                }
                        }
                        if(cnt>1){
                                output[input]["GET"].push("MULTIPLE_CONSTANTS")
                        }
        }
        var inpIndex2 = srchItem(strngSources, input,"put")
        if (inpIndex2 == -1) {
                console.log("Item not found: "+ input)
        }else{    
                        for(var i=0; i<strngSources[inpIndex2]["explanations"].length;i++){
                                        output[input]["PUT"].push(strngSources[inpIndex2]["explanations"][i]["tag"])
                        }
        }
        
        return;
}
function srchItem(strngSources,input,typ){
        var indx=-1
        if(typ==="get"){
                var flag = false
                var inpaddr = input[1]
        }else{
                var flag = true
                var inpaddr = input[3]
        }
        if(inpaddr){
                indx = strngSources.findIndex((val) => val.accessLoc === inpaddr && val.isPut===flag);
                if(indx == -1 ){
                        indx = strngSources.findIndex((val) => val.accessLoc.split("-").slice(0, -1).join('-') === inpaddr.split("-").slice(0, -1).join('-') && val.isPut===flag);
                }
        }
        return indx


}
function findReasonCount(arr,typ) {
        for(var el of arr){
                if(el in outputCnt[typ]){
                        outputCnt[typ][el]= outputCnt[typ][el] + 1
                }else{
                        outputCnt[typ][el]=1
                }
        }
        return;
}
function findPropReasons(){
var strngSources = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
var inpItems = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
outPath = process.argv[4];

for(var item of inpItems){
        findReason(strngSources,item)
}

var strngReasons = output
var filename=(process.argv[3]).replace(/props.json$/,"strng_causes2.json");
const json = JSON.stringify(strngReasons, null, 2)
fs.writeFileSync(filename, json, 'utf8',function(err) {
if(err) console.log('error', err);
});
var itmcnt=0
for (item in strngReasons){
        itmcnt+=1
        findReasonCount(strngReasons[item]["GET"],"GET")
        findReasonCount(strngReasons[item]["PUT"],"PUT")
        if((strngReasons[item]["GET"].length==0) || (strngReasons[item]["GET"].length==1 && strngReasons[item]["GET"].includes("CONSTANT"))){
                if((strngReasons[item]["PUT"].length==0) || (strngReasons[item]["PUT"].length==1 && strngReasons[item]["PUT"].includes("CONSTANT"))){
                
                console.log(item,strngReasons[item])
                }
        }

}
console.log("Total Unique Properties:")
console.log(itmcnt)
console.log("String Reason Counts:")
console.log(outputCnt)
var result = {"Total Unique Properties": itmcnt,"String Reason Counts": outputCnt}
var name = outPath.split("/").pop()
fs.writeFile(outPath+"/"+name+"_strngCount2.json", JSON.stringify(result, null, 2), (err) => {
        if(err){
            console.error(err);
            return;
        }
    });
}

findPropReasons()
module.exports={
        findPropReasons
      }