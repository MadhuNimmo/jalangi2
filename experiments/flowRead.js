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
var callnotfndCnt=0;
var calleefndlst={}

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
                                        //new to handle with
                                        return [i,trace[i]]                              
                                }//new to handle with
                                /*else if(trace[i]["typ"]=="With" && trace[i]["identity"] === fID["identity"]){
                                        return trace[i]
                                }*/
                        i++;
                        }  
        }
        return [0,null];     
}
//new to handle with
function findWith(trace, funID, startSearch, input) {
        for (fID of funID ){
                        var endSearch= trace.findIndex((val) => isEquivalent(val, fID));
                        var i = startSearch
                        while (i >=endSearch) {
                                        if(trace[i]["typ"]=="With" && trace[i]["identity"] === fID["identity"]){
                                                return trace[i]
                                        }
                                i--;
                                }  
        }       
        return null;     
}
function findCallee(trace, input) {
        if(input in calleefndlst){
                return calleefndlst[input];
        }else{
                var i=0;
                var list=[];
                while (i <trace.length) {
                        //new for href
                                if (trace[i]["typ"]==="Create" && (trace[i]["loc"] === input || (input.startsWith("href") && trace[i]["loc"].includes(input)))) {
                                        list.push(trace[i])                          
                                }
                        i++;
                }
                calleefndlst[input]=list
                return list;     
        }       
}

function findNatCallee(trace, dest,src) {
        var i=0;
        var list=[];
        while (i <trace.length) {
                //new for href
                        if(trace[i]["typ"]==="InvokeCall" && (trace[i]["loc"] === src || (src.startsWith("href") && trace[i]["loc"].includes(src)))) {
                                        list.push(trace[i])                          
                        }
                i++;
        }
        for (fID of list ){
                var i=0;
                while (i <trace.length) {
                                if (trace[i]["typ"]=="Get" && trace[i]["identity"] === fID["identity"] && trace[i]["comp"] == true && trace[i]["funName"] === dest.split(" (Native)")[0]) {
                                        return true                        
                                }
                        i++;
                }  
        }
        return null;     
}

function findRelevantCopies(trace, input, lex=false) {
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
                while ((precReadCreate['typ'] !== "Create" ) && traceIndex >= 0) {
                        writeValues = precWrite(trace, readIndex, funcId,lex);
                        /*if(writeValues ===undefined){
                                console.error("Write",input, readIndex,pathCopies)
                        }*/
                        precVarWrite = writeValues[0]
                        writeIndex = writeValues[1]
                        if(precVarWrite["typ"] === "Create"){
                                break;
                        }
                        pathCopies.push(precVarWrite)
                        readValues = precReadOrCreate(trace, writeIndex, funcId, ["LocRead","LexRead", "Create", "Get", "InvokeReturn"]);
                        /*if(readValues ===undefined){
                                console.error("Read",input, writeIndex,pathCopies)
                        }*/

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
                        //console.log("here")
                        //console.log(pathCopies)
                        //to reason partial traces
                        //Copies.push([])
                        pathCopies.unshift(input)
                        Copies.push(pathCopies)
                }

        }
        return Copies
}
function precReadOrCreate(trace, index, id, ops) {
        return returnPrec(trace, index, id, ops)
}

function precWrite(trace, index, id,lex) {
        //Matching preceding writes
        if (trace[index]["typ"] == "LocRead"){
                return returnPrec(trace, index, id, ["Write","Declare"] )
        }else if (trace[index]["typ"] == "LexRead") {
                //new to create better traces
                if(lex){
                        if (trace[index]["loc"].endsWith('.js')){
                                return returnPrec(trace, index, id, ["Put"] )
                        }
                }else{
                        return returnPrec(trace, index, id, ["Write","Declare"] )
                }
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
                                if (trace[i]["identity"] == id ) {
                                        //new for react the if clause
                                        if(trace[i]["typ"]=="LocRead"){
                                                if(!trace[i]["from"].endsWith(":this")){
                                                        return [trace[i], i]
                                                }
                                        }else{
                                                return [trace[i], i]
                                        }
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
/*const json = JSON.stringify(trace, null, 2)
filename="/Users/madhurimachakraborty/Documents/JShop_results/trace_edited.json"
fs.writeFileSync(filename, json, 'utf8',function(err) {
if(err) console.log('error', err);
});*/

//finding the approprate trace item with respect to the concerned call
for(var item of input){
                if( ["apply (Native)","call (Native)"].some(element => item.source.includes(element))  || !(item.source.includes("(Native)")) ){
                        if (item.destination.includes("(Native)")){
                                //new to model native calls from eval/evalIndirect
                                //new to capture calls that may be bounded but in eval
                                if(item.source.includes("eval:")){
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Use of Eval"})
                                }else if(item.source.includes("evalIndirect:")){ 
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Eval via New Function"})
                                // new calls to bounded methods 
                                }else if(item.destination.startsWith("bound ")){
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Calls involving bounded functions"})
                                }else{
                                        if(findNatCallee(trace,item.destination,item.source)===true){
                                                output.push({"src":item.source,"dest":item.destination,"trace":"Dynamic Property Access between: "+item.source+" and "+item.destination})
                                        }else{
                                                output.push({"src":item.source,"dest":item.destination,"trace":"Calls to unmodelled native functions"})
                                        }
                                }
                        }
                        /*else if(item.source.startsWith("eval:") || item.destination.startsWith("eval:")){
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
                        }*/
                        else{
                                var funCalled = findCallee(trace, item.destination)
                                if(funCalled.length>0){
                                        var call =null;
                                        var traceItem=0;
                                        [traceItem, call] = findCallLoc(trace, funCalled,item.source)
                                        if(call!==null){
                                                //new to generate traces for getters/setters
                                                /*if(["InvokeSetter","InvokeGetter"].includes(call.typ)){
                                                        output.push({"src":item.source,"dest":item.destination,"trace":"Call to Getter/Setter"})
                                                }else{*/
                                                        var rel_traces = findRelevantCopies(trace, call)
                                                        //to reason partial traces
                                                        //if (rel_traces[0].length===0){
                                                        var firstItem= rel_traces[0][rel_traces[0].length-1]
                                                        if(!(firstItem.typ=="Create" || (firstItem.typ=="InvokeReturn" && firstItem.funName === "Function"))){
                                                                //new to handle with
                                                                var callWith = findWith(trace, funCalled, traceItem, call)
                                                                if(callWith!==null){
                                                                        rel_traces[0].push(["Use of With"])
                                                                        output.push({"src":item.source,"dest":item.destination,"trace":rel_traces[0]})
                                                                }else{
                                                                        if(firstItem.typ=="LexRead"){
                                                                                rel_traces = findRelevantCopies(trace, call,true)
                                                                        }
                                                                        firstItem= rel_traces[0][rel_traces[0].length-1]
                                                                        if(!(firstItem.typ=="Create") && !(firstItem.typ=="InvokeReturn" && firstItem.identity.startsWith("FunNat:"))){
                                                                                rel_traces[0].push(["Dynamic Trace could not be filtered partially"])
                                                                        }
                                                                        output.push({"src":item.source,"dest":item.destination,"trace":rel_traces[0]})
                                                                }
                                                        }else{
                                                                output.push({"src":item.source,"dest":item.destination,"trace":rel_traces[0]})
                                                        }
                                                //}
                                        }else{
                                                
                                                output.push({"src":item.source,"dest":item.destination,"trace":"Multiple levels of Native functionality involved"})
                                        }
                                }else{
                                        console.log("Callee not found : "+ item.source,item.destination)
                                        callnotfndCnt+=1
                                }
                        }
                }else if (item.source.includes("(Native)")){
                        if(item.source === "system (Native)"){
                                output.push({"src":item.source,"dest":item.destination,"trace":"Entry point Edge"})
                        //new to model calls to bounded functions in react
                        }else if (item.source.startsWith("bound ") || item.destination.startsWith("bound ")){
                                output.push({"src":item.source,"dest":item.destination,"trace":"Calls involving bounded functions"})
                        }
                        else{   //new to model native calls to eval/evalIndirect
                                if(item.destination.startsWith("eval:")){
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Use of Eval"})
                                }else if(item.destination.startsWith("evalIndirect:")){
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Eval via New Function"})
                                /*}else if(unmodelledNatFuns.includes(item.source)){
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Calls from unmodelled native functions"})
                                }else{
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Path missed due to Parameter Pass"})
                                }*/
                                }else{
                                //console.log("here")
                                        output.push({"src":item.source,"dest":item.destination,"trace":"Calls from unmodelled native functions"})
                                }
                        }
                }else{
                        output.push({"src":item.source,"dest":item.destination,"trace":[]})
                }
}
for(var copy of output){
        copy.trace = [].concat(copy.trace).reverse();
}
console.log("Callee not found for "+ callnotfndCnt+" calls")
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