const fs = require('fs');
var Graph = require('./metrics/Graph.js');
var {isEquivalent} = require('./isEquivalent');
var output = new Graph();
//var missingPaths = []
var regex = /(\S+)\,\s\[(.*?)\]/gi
var keys = []
var dynTrace = {}
var StatFlow ={}
//var scallGraph ={}
var finalOutput=[]
var propRegex = /Prop\((.+)\)/gi///Prop\((\S+)\)/gi
/*var retRegex = /Ret\(Func\((\S+)\)\)/gi
var varRegex = /Var\((\S+)\,(.+)\)/gi
var lvarRegex = /\((\S+)\,(.+)/gi*/
var propArr = [];
var propNameArr = new Set();





const {performance} = require('perf_hooks');
//var missingFuncs= {}
var missingFuncLocs= []
//convert to graph
function jsonToGraph(input) {
        // Converting a json Flow Graph to Graph data structure
        for (var idx in input) {
                var item = input[idx];
                for (var key in item) {
                        output.addEdge(idx, item[key]);
                }
        }
}

function parse_fg(dynTraceInfo,statFlwGrph){

StatFlow = statFlwGrph//JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
jsonToGraph(StatFlow)

dynTrace = dynTraceInfo//JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
//new all missing functions
//scallGraph= scGraph

for(var item of dynTrace){
        /*if(!(item["src"] in missingFuncs)){
                missingFuncs[item["src"]]=[]
        }
        missingFuncs[item["src"]].push(item["dest"])*/
        if(!(item["dest"] in missingFuncLocs)){
                missingFuncLocs.push(item["dest"])
        }
}
var t0 = performance.now()
//changed from getNodes to getAllNodes i.e. values only to kays and values
keys = Array.from(output.getNodes());
var t1 = performance.now()
console.log("Call to getNodes took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now()
for(var item of dynTrace){
        //new
        if(typeof item["trace"][0] === "string"){
                finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":item["trace"][0]})
        }
        else if ((item["src"].includes("(Native)") || item["dest"].includes("(Native)")) && !(["apply (Native)","call (Native)"].some(element => item["src"].includes(element)))){
                if (item["src"]===("system (Native)")){
                        finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":"Entry point edge"})  
                }  
                else if (item["src"].startsWith("bound ") && item["src"].includes("(Native)")){
                        finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":"Calls to bounded functions"})
                }else if (item["src"].includes("(Native)")){
                        finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":"Calls from unmodelled native functions"})
                }else if (item["dest"].includes("(Native)")){
                        finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":"Calls to unmodelled native functions"})
                }
        }else {
                var trace = item["trace"]
                var missingPaths = []
                if (Array.isArray(trace) && trace.length>0){
                //new call/apply issue
                /*if(["apply (Native)","call (Native)"].some(element => item["src"].includes(element))){
                        for(var i=0;i<trace.length-2;i++){
                                missingPaths.push(findPath(trace[i],trace[i+1]));
                        }
                        missingPaths.push(findPath(trace[trace.length-2],trace[trace.length-1],true))
                }
                else{
                        for(var i=0;i<trace.length-1;i++){
                                missingPaths.push(findPath(trace[i],trace[i+1]));
                                }
                        }*/
                        for(var i=0;i<trace.length-2;i+=2){
                                //new to accomodate put item
                                missingPaths.push(findPath(trace[i],trace[i+2],[trace,i,i+2]));
                        }
                        if(["apply (Native)","call (Native)"].some(element => item["src"].includes(element))){
                                missingPaths.push(findPath(trace[trace.length-2],trace[trace.length-1],[trace,(trace.length-2),(trace.length-1)],true))
                        }else{
                                missingPaths.push(findPath(trace[trace.length-2],trace[trace.length-1],[trace,(trace.length-2),(trace.length-1)]))
                        }
                }

                finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":missingPaths})
        }
}
var t1 = performance.now()
console.log("Call to findPath took " + (t1 - t0) + " milliseconds.")
return [finalOutput,propArr,Array.from(propNameArr)];
}


function findPath(src,sink,inter,applycall = false){
        //console.log(inter)
        var src_ptrn=parse(src);
        var sink_ptrn=parse(sink,applycall);
        // in some case , we have SFG key patterns in pace of keys
        // existsItem searches and returns matching keys
        var stat_src= existsItem(src_ptrn);
        var stat_sink= existsItem(sink_ptrn); 

        //Source/Destination key may not exist in SFG
        if (stat_src === null ||  stat_src.length === 0)
        {
                //new to capture scenarios where the src/dest is missing altogether for dynamic access issues
                //new if src not found, no point of matching regex
                /*var prop_src = propRegex.exec(src_ptrn);
                propRegex.lastIndex=0;
                var prop_sink = propRegex.exec(stat_sink);
                propRegex.lastIndex=0;
                if(prop_src == null && prop_sink ==null){
                        return("Source not found: "+src_ptrn)
                }else{
                        //new when prop() is altogether missing due to dynamic property access
                        //(func both assigned and accessed via dpa)
                        //new controversial change can an edge from any node to prop() be missing due to dpa
                        //if(stat_sink.startsWith("Prop(")){
                        if(prop_sink || src_ptrn.startsWith("Prop(")){
                                return("1Dynamic Property Access between: "+src_ptrn+" and "+stat_sink)
                        }
                        return("Source not found due to Dynamic Property Access: "+src_ptrn);
                }*/
                if((typeof src_ptrn === "string" && src_ptrn.startsWith("Prop")) || (typeof sink_ptrn === "string" && sink_ptrn.startsWith("Prop"))){
                        //new dpa reasoning
                        //if(typeof src_ptrn === "string" && src_ptrn.startsWith("Prop")){
                        if(src.typ == "Get"){
                                //if(typeof src.from === 'string'){
                                        //var propItem = ["Get Key",src.loc,src.from.split(":").slice(-1)[0],inter[0][inter[1]-1].loc]
                                        var propItem = ["Get Key",src.loc,src.from,inter[0][inter[1]-1].loc]

                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                                        //propNameArr.add(src.from.split(":").slice(-1)[0])
                                        propNameArr.add(src.from)
                                //}
                        }
                        //if(typeof sink_ptrn === "string" && sink_ptrn.startsWith("Prop")){
                        if(sink.typ == "Get"){
                                //if(typeof sink.from === 'string'){
                                        //var propItem = ["Get Key",sink.loc,sink.from.split(":").slice(-1)[0],inter[0][inter[2]-1].loc]
                                        var propItem = ["Get Key",sink.loc,sink.from,inter[0][inter[2]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                                        //propNameArr.add(sink.from.split(":").slice(-1)[0])
                                        propNameArr.add(sink.from)
                                //}
                        }
                        return("Dynamic Property Access between: "+src_ptrn+" and "+stat_sink )
                }else{
                        return("Source not found: "+src_ptrn)
                }
                
        }
        else if (stat_sink === null ||  stat_sink.length === 0){
                //new to capture scenarios where the src/dest is missing altogether for dynamic access issues
                if((typeof src_ptrn === "string" && src_ptrn.startsWith("Prop")) || (typeof sink_ptrn === "string" && sink_ptrn.startsWith("Prop"))){
                        //new dpa reasoning
                        //if(typeof src_ptrn === "string" && src_ptrn.startsWith("Prop")){
                        if(src.typ == "Get"){
                                //var propItem = ["Get Key",src.loc,src.from.split(":").slice(-1)[0],inter[0][inter[1]-1].loc]
                                //if(typeof src.from === 'string'){
                                        var propItem = ["Get Key",src.loc,src.from,inter[0][inter[1]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                                        //propNameArr.add(src.from.split(":").slice(-1)[0])
                                        propNameArr.add(src.from)
                                //}

                        }
                        //if(typeof sink_ptrn === "string" && sink_ptrn.startsWith("Prop")){
                        if(sink.typ == "Get"){
                                //if(typeof sink.from === 'string'){
                                        //var propItem = ["Get Key",sink.loc,sink.from.split(":").slice(-1)[0],inter[0][inter[2]-1].loc]
                                        var propItem = ["Get Key",sink.loc,sink.from,inter[0][inter[2]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                                        //propNameArr.add(sink.from.split(":").slice(-1)[0])
                                        propNameArr.add(sink.from)
                                //}
                        }
                        return("Dynamic Property Access between: "+stat_src+" and "+sink_ptrn)
                }else{
                        return("Destination not found: "+sink_ptrn)
                }
        }
        else{   
                stat_src= typeof stat_src === 'string' ? [stat_src] : stat_src;
                stat_sink= typeof stat_sink === 'string' ? [stat_sink] : stat_sink;
                
                if (stat_src.some(el=> stat_sink.includes(el)) === true){
                        return("Source and Destination are same: "+stat_src);
                }
                else if (getPath(stat_src,stat_sink)=== false){
                        //missingPaths.push([stat_src,stat_sink])
                        //new to allow Dynamic Property Access
                        var prop_src = propRegex.exec(stat_src);
                        propRegex.lastIndex=0;
                        var prop_sink = propRegex.exec(stat_sink);
                        propRegex.lastIndex=0;
                        if(prop_src == null && prop_sink ==null){
                                //not working as expected
                                if(stat_src[0].startsWith("Ret(Func")) {
                                        //var ret_cl = Object.keys(missingFuncs).filter(el => el.includes(src.loc))
                                        //console.log(ret_cl.length>0?missingFuncs[ret_cl[0]].includes(src["ret"][0]["retLoc"]):null)
                                        //if(ret_cl.length>0 && missingFuncs[ret_cl[0]].includes(src["ret"][0]["retLoc"])){
                                        if(missingFuncLocs.includes(src["ret"][0]["retLoc"])){
                                                return("Path missing for interdependent call between: "+stat_src+" and "+stat_sink);
                                        }
                                }
                                if(stat_sink[0].startsWith("Ret(Func")){
                                        //var ret_cl = Object.keys(missingFuncs).filter(el => el.includes(sink.loc))
                                        //console.log(ret_cl.length>0?missingFuncs[ret_cl[0]].includes(sink["ret"][0]["retLoc"]):null)
                                        //if(ret_cl.length>0 && missingFuncs[ret_cl[0]].includes(sink["ret"][0]["retLoc"])){
                                        if(missingFuncLocs.includes(sink["ret"][0]["retLoc"])){
                                                return("Path missing for interdependent call between: "+stat_src+" and "+stat_sink);
                                        }
                                }
                                //new grossly imprecise right now
                                //if (stat_src[0].startsWith("Var(") || stat_src[0].startsWith("Var(")){
                                if (stat_src[0].startsWith("Var(") || stat_src[0].startsWith("LexVar(")){
                                        //var var_src = varRegex.exec(stat_src[0]);
                                        //varRegex.lastIndex=0;
                                        //var item = stat_src[0].startsWith("Var(")? src:sink 
                                        //console.log("here: ",item ,missingFuncLocs.includes(src.loc))
                                        if(stat_src[0].startsWith("Var(")  && missingFuncLocs.includes(src.loc)){
                                                return("Path missing for interdependent call between: "+stat_src+" and "+stat_sink);
                                        }else{
                                                var lvar_arr = src.loc.split("@")
                                                if(missingFuncLocs.some(el=> lvar_arr.every(arel=>el.includes(arel)))){
                                                        return("Path missing for interdependent call between: "+stat_src+" and "+stat_sink);
                                                }
                                        }
                                        //var var_snk = varRegex.exec(stat_sink[0]);
                                        //varRegex.lastIndex=0;
                                        //if(var_snk!==null && missingFuncs[src.loc].includes(var_snk[1])){
                                        //        return("Path missing due to interdependent call between: "+stat_src+" and "+stat_sink);
                                        //}
                                }
                                //if (stat_src[0].startsWith("LexVar(") || stat_sink[0].startsWith("LexVar(")){
                                if (stat_sink[0].startsWith("Var(") || stat_sink[0].startsWith("LexVar(")){
                                        //var item = stat_src[0].startsWith("LexVar(")? src:sink 
                                        //console.log("here2",item ,missingFuncLocs.includes(item.loc))
                                        if(stat_sink[0].startsWith("Var(")  && missingFuncLocs.includes(sink.loc)){
                                                return("Path missing for interdependent call between: "+stat_src+" and "+stat_sink);
                                        }else{
                                                var lvar_arr = sink.loc.split("@")
                                                if(missingFuncLocs.some(el=> lvar_arr.every(arel=>el.includes(arel)))){
                                                        return("Path missing for interdependent call between: "+stat_src+" and "+stat_sink);
                                                }
                                        }
                                        //if(lvar_src!==null){
                                        //        var lvar_arr = lvar_src[1].split("@")
                                        //        if(missingFuncs[src.loc]!==undefined && missingFuncs[src.loc].some(el=> lvar_arr.every(arel=>el.includes(arel)))){
                                        //        return("Path missing due to interdependent call between: "+stat_src+" and "+stat_sink);
                                        //        }
                                        //}
                                        //var lvar_snk = lvarRegex.exec(stat_sink[0]);
                                        //lvarRegex.lastIndex=0;
                                        //if(lvar_snk!==null){
                                        //        var lvar_arr = lvar_snk[1].split("@")
                                        //        if(missingFuncs[src.loc]!==undefined && missingFuncs[src.loc].some(el=> lvar_arr.every(arel=>el.includes(arel)))){
                                        //        return("Path missing due to interdependent call between: "+stat_src+" and "+stat_sink);
                                        //        }
                                        //}
                                }
                                return("Path missing between: "+stat_src+" and "+stat_sink);
                        }else{
                                //new dpa reasoning
                                if(prop_src!=null && src.typ=="Get"){//&& typeof src.from==='string'){
                                        //var propItem = ["Get Key",src.loc,src.from.split(":").slice(-1)[0],inter[0][inter[1]-1].loc]
                                        var propItem = ["Get Key",src.loc,src.from,inter[0][inter[1]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        //console.log(src)
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                                        //propNameArr.add(src.from.split(":").slice(-1)[0])
                                        propNameArr.add(src.from)

                                }
                                if(prop_sink!=null && sink.typ=="Get"){//&& typeof sink.from==='string'){
                                        //var propItem = ["Get Key",sink.loc,sink.from.split(":").slice(-1)[0],inter[0][inter[2]-1].loc]
                                        var propItem = ["Get Key",sink.loc,sink.from,inter[0][inter[2]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        //console.log(sink)
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                                        //propNameArr.add(sink.from.split(":").slice(-1)[0])
                                        propNameArr.add(sink.from)

                                }
                                return("Dynamic Property Access between: "+stat_src+" and "+stat_sink)
                                
                                /*if(prop_src==null) //&& sink.op!=="undefined")
                                        {return("Dynamic Property Access between: "+stat_src+" and "+stat_sink +" due to "+sink.op)}
                                if(prop_sink==null) //&& src.op!=="undefined")
                                        {return("Dynamic Property Access between: "+stat_src+" and "+stat_sink +" due to "+src.op)}
                                return("Dynamic Property Access between: "+stat_src+" and "+stat_sink)*/
                                
                        }
                }
        }
        //get rid of this later, as we only want to know whats missing 
        //replace by null, and read return only when not null
        return("Path found between: "+stat_src+" and "+stat_sink)

}
/*function getEncFunc(node){
        for (var mkey of Object.keys(scallGraph)) {
                        for (var ckey in scallGraph[mkey]) {
                                        values = scallGraph[mkey][ckey]
                                        //console.log(values)
                                        if(values.includes(node)){
                                                return mkey;
                                        }
                        }
        }
}*/
function getPath(stat_src,stat_sink){
        for(var src of stat_src){
                for(var sink of stat_sink){
                        if (output.getPath(src,sink) === true){
                                return true
                        }

                }
        }
        return false;
}
function existsItem(input){
        //return input if exact match else list of matching values 
        if(typeof input === "string"){
                //newest
                if(input.startsWith("LexVar")){
                        var temp= keys.includes(input)?input:null
                        if(temp==null){
                                var inputPiece=input.split("/").slice(-1).toString()
                                var temp2 = keys.filter(val=> val.includes(inputPiece))
                                return keys.includes(temp2[0])?temp2[0]:null
                        }else{
                                return temp
                        }
                }else{
                return keys.includes(input)?input:null
                }
        }
        else if (typeof input === "object"){
                var psblmatches= [];
                psblmatches = keys.filter(key => key.startsWith(input[0]))
                var finlmatches = [];
                for (key of psblmatches)
                        {
                                var res = regex.exec(key);
                                regex.lastIndex = 0;
                                if(res!==null && res[1]===input[0]){
                                        if (res[2] === [input[1]] || res[2].split(", ").includes(input[1])){
                                                finlmatches.push(key)
                                        }
                                }
                                
                        }
                 return finlmatches;    
        }
}
//find path given to consecutive reads

function parse(inp,applycall){ //last no more required as we got rid of invokereturn for callee
        if(inp.typ==="Create"){
                return "Func("+inp.loc+")"//["Func"+inp.loc];
        }
        else if(inp.typ==="Get"){
                //return "Prop("+inp.from.split(":").slice(-1)[0]+")"//["Prop("+inp.from.split(":")[1]+")"]
                return "Prop("+inp.from+")"//.split(":").slice(-1)[0]+")"

        }
        else if(inp.typ==="LexRead"){
                return "LexVar("+inp.loc+", "+inp.from.split(":")[1]+")" //["LexVar"+(inp.loc).slice(0,-1),inp.from.split(":")[1]]
        }
        else if(inp.typ==="LocRead"){
                if(inp.curr==="Global"){
                        return "Prop("+inp.from.split(":")[1]+")";
                }
                else{
                        return ["Var("+inp.loc,inp.from.split(":")[1]]//"Var("+inp.loc+", ["+inp.from.split(":")[1]+"])"
                }
        }
        else if(inp.typ==="InvokeReturn"){
                        return "Ret(Func("+inp["ret"][0]["retLoc"]+"))"
        }
        else if(inp.typ==="InvokeCall"){
                //new
                if(applycall){
                        return "ReflectiveCallee("+inp.loc+")";
                }else{
                        return "Callee("+inp.loc+")";
                }
        }
        //call/apply issue
        else{
                return inp;
        }
}

module.exports={
        parse_fg
      }