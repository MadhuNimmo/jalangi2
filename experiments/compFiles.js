const fs = require('fs');
var Cregex=/[0-9]+\:[0-9]+\-[0-9]+/g;
xarr = fs.readFileSync(process.argv[2]).toString().split("\n");
yarr = fs.readFileSync(process.argv[3]).toString().split("\n");
//console.log(xarr.indexOf("knockout-latest.js@24:9129-9143 -> knockout-latest.js@69:32226-32313"))
const mismatch1 = yarr.filter((val) => xarr.indexOf(val) == -1); 
const mismatch2 = xarr.filter((val) => yarr.indexOf(val) == -1);  
var filteredKeywords = yarr.filter((word) => !xarr.includes(word));
console.log(filteredKeywords)
var filteredKeywords2 = xarr.filter((word) => !yarr.includes(word));
console.log(filteredKeywords2)
/*const match = xarr.filter((val)=>{
var [x,y] = val.split(" -> ")
for(var item of yarr){
        if (item.includes(x) && item.includes(y)){
                return true;
        }

}
})*/
console.log(xarr.length,yarr.length)
//const xNative= mismatch1.filter((val) => (val.endsWith("(Native)")));
//const yNative= yarr.filter((val) => !(val.includes("(Native)")));
//console.log(yNative)
console.log(mismatch1.length,mismatch2.length)
console.log(mismatch1.slice(0,5))
//console.log(mismatch1.length>0?mismatch1.join("\n"):"None");
//const misNative= mismatch1.filter((val) => !(val.includes("(Native)")));
//const mismatch2 = yNative.filter((val) => xarr.indexOf(val) == -1); 
//console.log(mismatch2.length>0?mismatch2.join("\n"):"None");
//console.log(mismatch1.length)
//console.log(mismatch2.length>0?mismatch2.join("\n"):"None");
//console.log(misNative)
//const misNative= mismatch2.filter((val) => (val.endsWith("(Native)")));
//console.log(misNative.length)
/*const m1c= mismatch1.map((val)=>val.split(" -> ")[1])
console.log(m1c.length)
const m2c= mismatch2.map((val)=>val.split(" -> ")[1])
console.log(m2c.length)
const mmm = m1c.filter((val) => m2c.indexOf(val) == -1); 
console.log(mmm)*/