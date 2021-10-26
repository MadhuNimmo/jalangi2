var {flowProcess} = require('./flowProcess');

const fs = require('fs');

var output={}
function findRelevantTrace(strgTrace, input,getput) {
        if(getput==="get"){
                var inpIndex = strgTrace.findIndex((val) => JSON.stringify(val.slice(0,3))===JSON.stringify(input.slice(0,3)));
        }else if (getput==="put"){ 
                var inpIndex = strgTrace.findIndex((val) => JSON.stringify(val.slice(0,3))===JSON.stringify(input.slice(0,3)));
        }
        if (inpIndex == -1) {
                console.log("Item not found: "+ input)
                return;
        }
        while (inpIndex >=0) {                        
                        if (["Get Value","Function Return","Binary","ForInKey","Literal","Arguments Object","Function Argument","Array Push"].includes(strgTrace[inpIndex][0]) && strgTrace[inpIndex][2] === input[2]) {
                                if(input[0]=="Get Key" && strgTrace[inpIndex][0] === "Literal"){
                                        return findRelevantTrace(strgTrace,["Put Key",input[3],input[2]],"put")
                                        //return findRelevantTrace(strgTrace,input,"put")
                                        //return;     
                                }else{
                                        //output[input]= strgTrace[inpIndex]   
                                        return strgTrace[inpIndex];        
                                }
                                                     
                        }
                        /*if(inpIndex===0){
                                //console.log("here",input)
                                output[input]= ["Nothing Found"]
                                return ["Nothing Found"];
                        }*/
                        inpIndex= inpIndex - 1;
                } 
        //output[input]= ["Nothing Found"]
        return ["Nothing Found"];   

}
function flowvar_filter(){
var strngTrace = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
var inputDir = (process.argv[3]).toString();
var inpItems = JSON.parse(fs.readFileSync(process.argv[4], 'utf8'));
strngTrace = flowProcess(strngTrace,inputDir,"strngTrace")

for(var item of inpItems){
        output[item]=findRelevantTrace(strngTrace,item,"get")
        //console.log(item,out)
}
//console.log(output)
return output;
}
var strngMiss = flowvar_filter()
var filename=(process.argv[4]).replace(/props.json$/,"strng_causes5.json");
const json = JSON.stringify(strngMiss, null, 2)
fs.writeFileSync(filename, json, 'utf8',function(err) {
if(err) console.log('error', err);
});

module.exports={
        flowvar_filter
      }