var fs = require('fs');
var {flowProcess} = require('./flowProcess');
const { exit } = require('process');

var trace = []
var input= []
var inputDir=""
var strngArr=[]
var writeValues = [];
var readValues = [];
var bindValues = [];
var precVarWrite = {};
var precVarRead = {};
var precReadCreate = {};
var readIndex = 0;
var writeIndex = 0;
var traceIndex = 0;


var funcId = "";
var output = [];
var pathCopies = [];

function findCallLoc(trace, funID,callLoc) {
        for (fID of funID ){
                if (["apply (Native)","call (Native)"].some(element => callLoc.includes(element))){
                        callLoc = callLoc.match(/(?<=\[).+?(?=\])/g).toString()
                }
                var i=0;
                while (i <trace.length) {
                                if (["InvokeCall","InvokeGetter","InvokeSetter"].includes(trace[i]["typ"]) && trace[i]["identity"] === fID["identity"] && trace[i]["loc"] === callLoc) {
                                        return trace[i]                              
                                }
                        i++;
                        }  
        }
        return null;     
}
function findCallee(trace, input) {

        var i=0;
        var list=[];
        while (i <trace.length) {
                        if (trace[i]["typ"]==="Create" && trace[i]["loc"] === input) {
                                list.push(trace[i])                          
                        }
                i++;
                }  
        return list;     
}

function findRelevantCopies(trace, input) {
        var Copies=[]
        funcId = input["identity"];
        var initIndex = trace.findIndex((val) => isEquivalent(val, input));
        var initIndexes = [initIndex]
       
        if (initIndexes.length == 0) {
                console.log("Function Invocation not found")
                exit(0);
        }
        for(initIndex of initIndexes){
                pathCopies=[]
                try{
                writeValues = [];
                readValues = [];
                bindValues = [];
                precVarWrite = {};
                precVarRead = {};
                precReadCreate = {};
                readIndex = 0;
                writeIndex = 0;
                traceIndex=0;
                [precReadCreate, readIndex] = precReadOrCreate(trace, initIndex, funcId, ["LocRead","LexRead", "Create", "Get", "InvokeReturn"])//precReadOrCreate(trace,initIndex,funcInv);
                traceIndex = readIndex;
                pathCopies.push(precReadCreate)
                while ((precReadCreate['typ'] != "Create" ) && traceIndex >= 0) {
                        writeValues = precWrite(trace, readIndex, funcId);
                        if(writeValues ===undefined){
                                console.error("Write",input, readIndex,pathCopies)
                        }
                        precVarWrite = writeValues[0]
                        writeIndex = writeValues[1]
                        if(precVarWrite["typ"] === "Create"){
                                break;
                        }
                        pathCopies.push(precVarWrite)
                        readValues = precReadOrCreate(trace, writeIndex, funcId, ["LocRead","LexRead", "Create", "Get", "InvokeReturn"]);
                        if(readValues ===undefined){
                                console.error("Read",input, writeIndex,pathCopies)
                        }

                        precVarRead = readValues[0]
                        readIndex = readValues[1]
                        pathCopies.push(precVarRead)
                        precReadCreate = precVarRead

                        traceIndex = traceIndex - 1;
                }
                pathCopies.unshift(input)
                Copies.push(pathCopies)
                }
                catch(e){
                        console.log(pathCopies)
                        Copies.push([])
                }

        }
        return Copies
}
function precReadOrCreate(trace, index, id, ops) {
        return returnPrec(trace, index, id, ops)
}

function precWrite(trace, index, id) {
        //Matching preceding writes
        if (trace[index]["typ"] == "LocRead" || trace[index]["typ"] == "LexRead") {
                return returnPrec(trace, index, id, ["Write","Declare"] )
        }
        else if (trace[index]["typ"] == "Get") {
                return returnPrec(trace, index, id, ["Put"])
        }
        else if (trace[index]["typ"] == "InvokeReturn" ){
                if (trace[index]["funName"] == "Function" && trace[index]["identity"].includes("FunNat")){
                        return returnPrec(trace, index, trace[index]["ret"][0]["retId"], ["Create"])     
                }
                else{
                        return returnPrec(trace, index, id, ["Return"])
                }
        }
}


function returnPrec(trace, index, id, oper) {
        //Matching preceding dynamic copies
        var i = index - 1;
        while (i >= 0) {
                if (oper.includes(trace[i]["typ"])) {
                        if (trace[i]["typ"] == "InvokeReturn" ){
                                if (trace[i]["ret"] != null) {
                                                if (trace[i]["ret"][0]["retId"] == id) {
                                                        return [trace[i], i]
                                                }
                                        }

                        }
                        else if ( (trace[index]["typ"] == "LocRead" || trace[index]["typ"] == "LexRead" ) && (trace[i]["typ"] == "Write" || trace[i]["typ"] == "Declare")){
                                if (trace[i]["to"] == trace[index]["from"] && trace[i]["identity"] == id) {
                                        return [trace[i], i]
                                        }
                        }
                        else if ( (trace[index]["typ"] == "Get" ) && (trace[i]["typ"] == "Put")){
                                if (trace[i]["to"] === trace[index]["from"] && trace[i]["identity"] == id) {

                                        return [trace[i], i]
                                        }
                        }
                        else {
                                if (trace[i]["identity"] == id) {
                                        return [trace[i], i]
                                }

                        }
                }
                i--;
        }
}

function flowRead(mismatches,trace,inputDir){
for(var mismatch_key in mismatches){
        var mismatch_values = mismatches[mismatch_key]
        for(var mismatch_value of mismatch_values){
                        input.push({"source":mismatch_key,"destination":mismatch_value})
        }
}

inputDir = inputDir
//processing the trace beforehand
trace = flowProcess(trace,inputDir)
//finding the approprate trace item with respect to the concerned call
for(var item of input){
                if( ["apply (Native)","call (Native)"].some(element => item.source.includes(element))  || !(item.source.includes("(Native)")) ){
                        if (item.destination.includes("(Native)")){
                                output.push({"src":item.source,"dest":item.destination,"trace":"Calls to unmodelled native functions"})
                        }
                        else if(item.source.startsWith("eval:") || item.destination.startsWith("eval:")){
                                output.push({"src":item.source,"dest":item.destination,"trace":"Eval involved"})   
                        }else if(item.source.startsWith("evalIndirect:") || item.destination.startsWith("evalIndirect:")){
                                if (item.destination.startsWith("evalIndirect:")){
                                        var flagEval = false;
                                        var funCalled = findCallee(trace, item.destination)
                                        if(funCalled.length>0){
                                                var call = findCallLoc(trace, funCalled,item.source)
                                                if(call!==null){
                                                        var rel_traces = findRelevantCopies(trace, call)
                                                        if (rel_traces[0].length>0 ){
                                                                var fistItem = rel_traces[0].slice(-1).pop()
                                                                if (fistItem["typ"] === "InvokeReturn" && fistItem["funName"] === "Function" && !fistItem["loc"].startsWith("eval") ){
                                                                        flagEval =  true;
                                                                }
                                                        }
                                                }
                                        }
                                        if(flagEval==true){
                                                output.push({"src":item.source,"dest":item.destination,"trace":"Function Constructor involved"})
                                        }else{
                                                output.push({"src":item.source,"dest":item.destination,"trace":"Function Eval involved"}) 
                                        }
                                }else{
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Function Eval involved"}) 
                                }
                        }
                        else{
                                var funCalled = findCallee(trace, item.destination)
                                if(funCalled.length>0){
                                        var call = findCallLoc(trace, funCalled,item.source)
                                        if(call!==null){
                                                if(["InvokeSetter","InvokeGetter"].includes(call.typ)){
                                                        output.push({"src":item.source,"dest":item.destination,"trace":"Call to Getter/Setter"})
                                                }else{
                                                        var rel_traces = findRelevantCopies(trace, call)
                                                        if (rel_traces[0].length===0){
                                                                output.push({"src":item.source,"dest":item.destination,"trace":"Dynamic Trace could not be filtered"})
                                                        }else{
                                                                output.push({"src":item.source,"dest":item.destination,"trace":rel_traces[0]})
                                                        }
                                                }
                                        }else{
                                                output.push({"src":item.source,"dest":item.destination,"trace":"Multiple levels of Native functionality involved"})
                                        }
                                }else{
                                        console.log("Callee not found : "+ item.source,item.destination)
                                }
                        }
                }else if (item.source.includes("(Native)")){
                        if(item.source === "system (Native)"){
                                output.push({"src":item.source,"dest":item.destination,"trace":"Entry point Edge"})
                        }else if (item.source.startsWith("bound ") && item.source.includes("(Native)")){
                                output.push({"src":item.source,"dest":item.destination,"trace":"Calls to bounded functions"})
                        }else{
                                output.push({"src":item.source,"dest":item.destination,"trace":"Calls from unmodelled native functions"})
                        }
                }else{
                        output.push({"src":item.source,"dest":item.destination,"trace":[]})
                }
}
for(var copy of output){
        copy.trace = [].concat(copy.trace).reverse();
}

return output;
}

function isEquivalent(a, b) {
        // Create arrays of property names
        var aProps = Object.getOwnPropertyNames(a);
        var bProps = Object.getOwnPropertyNames(b);

        // If number of properties is different,
        // objects are not equivalent
        if (aProps.length != bProps.length) {
                return false;
        }

        for (var i = 0; i < aProps.length; i++) {
                var propName = aProps[i];
                // If values of same property are not equal,
                // objects are not equivalent
                if (a[propName] !== b[propName]) {
                        if (a[propName].toString() !== b[propName].toString()) {
                                return false;
                        }
                }
        }

        return true;
}

module.exports={
        flowRead
      }