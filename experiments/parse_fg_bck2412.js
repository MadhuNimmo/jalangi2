const fs = require('fs');
var Graph = require('./metrics/Graph.js');
var output = new Graph();
//var missingPaths = []
var regex = /(\S+)\,\s\[(.*?)\]/gi
var keys = []
var dynTrace = {}
var StatFlow ={}
var scallGraph ={}
var finalOutput=[]
var propRegex = /Prop\((.+)\)/gi///Prop\((\S+)\)/gi
var retRegex = /Ret\(Func\((\S+)\)\)/gi
var varRegex = /Var\((\S+)\,(.+)\)/gi
var lvarRegex = /\((\S+)\,(.+)/gi




const {performance} = require('perf_hooks');
var missingFuncs= {}
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

function parse_fg(dynTraceInfo,statFlwGrph,scGraph){

StatFlow = statFlwGrph//JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
jsonToGraph(StatFlow)

dynTrace = dynTraceInfo//JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
//new all missing functions
scallGraph= scGraph

for(var item of dynTrace){
        if(!(item["src"] in missingFuncs)){
                missingFuncs[item["src"]]=[]
        }
        missingFuncs[item["src"]].push(item["dest"])
        missingFuncLocs.push(item["dest"])
}
var t0 = performance.now()
//changed from getNodes to getAllNodes i.e. values only to kays and values
keys = Array.from(output.getNodes());
var t1 = performance.now()
console.log("Call to getNodes took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now()
for(var item of dynTrace){
        //if(item["trace"][0]==='Dynamic Trace could not be generated'){
        //new
        if(typeof item["trace"][0] === "string"){
                finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":item["trace"][0]})
        }
        else if ((item["src"].includes("(Native)") || item["dest"].includes("(Native)")) && !(["apply (Native)","call (Native)"].some(element => item["src"].includes(element)))){
                if (item["src"]===("system (Native)")){
                        finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":"Entry point edge"})    
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
                if(["apply (Native)","call (Native)"].some(element => item["src"].includes(element))){
                        for(var i=0;i<trace.length-2;i++){
                                missingPaths.push(findPath(trace[i],trace[i+1]));
                                }
                        if(item["src"].includes("apply (Native)")){
                                //Var(callerFunc, this..)-> Param(Func(callee), XXXX)
                                var encFunc = getEncFunc("Function_prototype_"+item["src"])
                                var pthFnd = findPath(["Var("+encFunc,"this"],"Param(Func("+item["dest"]+"), 1)")//findPath("Param(Func("+item["dest"]+"), 1)",["Var("+encFunc,"this"])
                                if(pthFnd.includes("Path missing between:") && trace[trace.length-2].typ==="Get"){
                                        missingPaths.push("Dynamic Property Access between: "+"Param(Func("+item["dest"]+"), 1)"+" and "+"Var("+encFunc+", [this])")                                     
                                }else{
                                        missingPaths.push(pthFnd)
                                }
                                missingPaths.push(findPath("Prop(apply)",trace[trace.length-1]));
                        }else if(item["src"].includes("call (Native)")){
                                var encFunc = getEncFunc("Function_prototype_"+item["src"])
                                var pthFnd = findPath("Param(Func("+item["dest"]+"), 1)",["Var("+encFunc,"this"])//"Var("+encFunc+", [this])")
                                if(pthFnd.includes("Path missing between:") && trace[trace.length-2].typ==="Get"){
                                        //new this tag is incorrect at times
                                        missingPaths.push("Dynamic Property Access between: "+"Param(Func("+item["dest"]+"), 1)"+" and "+"Var("+encFunc+", [this])")                                    
                                }else{
                                        missingPaths.push(pthFnd)
                                }
                                missingPaths.push(findPath("Prop(call)",trace[trace.length-1]));
                        }
                        
                }
                else{
                        for(var i=0;i<trace.length-1;i++){
                                missingPaths.push(findPath(trace[i],trace[i+1]));
                                }
                        }
                }
                finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":missingPaths})
        }
}
var t1 = performance.now()
console.log("Call to findPath took " + (t1 - t0) + " milliseconds.")
return finalOutput;
}


function findPath(src,sink){
        
        var src_ptrn=parse(src);
        var sink_ptrn=parse(sink);
        // in some case , we have SFG key patterns in pace of keys
        // existsItem searches and returns matching keys
        var stat_src= existsItem(src_ptrn);
        var stat_sink= existsItem(sink_ptrn); 

        //Source/Destination key may not exist in SFG
        if (stat_src === null ||  stat_src.length === 0)
        {
                //new to capture scenarios where the src/dest is missing altogether for dynamic access issues
                //new if src not found, no point of matching regex
                var prop_src = propRegex.exec(src_ptrn);
                propRegex.lastIndex=0;
                var prop_sink = propRegex.exec(stat_sink);
                propRegex.lastIndex=0;
                if(prop_src == null && prop_sink ==null){
                        return("Source not found: "+src_ptrn)
                }else{
                        //new when prop() is altogether missing due to dynamic property access
                        //(func both assigned and accessed via dpa)
                        if(src_ptrn.startsWith("Prop(")){
                                return("Dynamic Property Access between: "+src_ptrn+" and "+stat_sink)
                        }
                        return("Source not found due to Dynamic Property Access: "+src_ptrn);
                }
                
        }
        else if (stat_sink === null ||  stat_sink.length === 0){
                //new to capture scenarios where the src/dest is missing altogether for dynamic access issues
                var prop_src = propRegex.exec(stat_src);
                propRegex.lastIndex=0;
                var prop_sink = propRegex.exec(sink_ptrn);
                propRegex.lastIndex=0;
                if(prop_src == null && prop_sink ==null){
                        return("Destination not found: "+sink_ptrn)
                }else{
                        //new callee tags from prop are dynamic property access
                        //neww when prop() is altogether missing due to dynamic property access
                        //(func both assigned and accessed via dpa)
                        if(sink_ptrn.startsWith("Callee(") || sink_ptrn.startsWith("Prop(")){
                                return("Dynamic Property Access between: "+stat_src+" and "+sink_ptrn)
                        }
                        return("Destination not found due to Dynamic Property Access: "+sink_ptrn);      
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
                                if(stat_src[0].startsWith("Ret(Func(") || stat_sink[0].startsWith("Ret(Func(")){
                                        var item = stat_src[0].startsWith("Ret(Func(")? src:sink 
                                        var ret_cl = Object.keys(missingFuncs).filter(el => el.includes(item.loc))
                                        if(ret_cl.length>0 && missingFuncs[ret_cl].includes(item["ret"][0]["retLoc"])){
                                                return("Path missing due to interdependent call between: "+stat_src+" and "+stat_sink);
                                        }
                                }
                                //new grossly imprecise right now
                                if (stat_src[0].startsWith("Var(") || stat_sink[0].startsWith("Var(")){
                                        //var var_src = varRegex.exec(stat_src[0]);
                                        //varRegex.lastIndex=0;
                                        var item = stat_src[0].startsWith("Var(")? src:sink 
                                        if(item && missingFuncLocs.includes(item.loc)){
                                                return("Path missing due to interdependent call between: "+stat_src+" and "+stat_sink);
                                        }
                                        //var var_snk = varRegex.exec(stat_sink[0]);
                                        //varRegex.lastIndex=0;
                                        //if(var_snk!==null && missingFuncs[src.loc].includes(var_snk[1])){
                                        //        return("Path missing due to interdependent call between: "+stat_src+" and "+stat_sink);
                                        //}
                                }
                                if (stat_src[0].startsWith("LexVar(") || stat_sink[0].startsWith("LexVar(")){
                                        var item = stat_src[0].startsWith("LexVar(")? src:sink 
                                        if(item && missingFuncLocs.includes(item.loc)){
                                                return("Path missing due to interdependent call between: "+stat_src+" and "+stat_sink);
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
                                return("Dynamic Property Access between: "+stat_src+" and "+stat_sink);
                        }
                }
        }
        //get rid of this later, as we only want to know whats missing 
        //replace by null, and read return only when not null
        return("Path found between: "+stat_src+" and "+stat_sink)

}
function getEncFunc(node){
        for (var mkey of Object.keys(scallGraph)) {
                        for (var ckey in scallGraph[mkey]) {
                                        values = scallGraph[mkey][ckey]
                                        //console.log(values)
                                        if(values.includes(node)){
                                                return mkey;
                                        }
                        }
        }
}
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
                return keys.includes(input)?input:null
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

function parse(inp){ //last no more required as we got rid of invokereturn for callee
        if(inp.typ==="Create"){
                return "Func("+inp.loc+")"//["Func"+inp.loc];
        }
        else if(inp.typ==="Get"){
                return "Prop("+inp.from.split(":").slice(-1)[0]+")"//["Prop("+inp.from.split(":")[1]+")"]
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
                        return "Callee("+inp.loc+")";
        }
        //call/apply issue
        else{
                return inp;
        }
}

module.exports={
        parse_fg
      }