const fs = require('fs');
var Graph = require('./metrics/Graph.js');
var output = new Graph();
var regex = /(\S+)\,\s\[(.*?)\]/gi
var regex2 = /Var\((\S+)\,.*/gi
var keys = []
var dynTrace = {}
var StatFlow ={}
var scallGraph ={}
var dcallGraph ={}
var finalOutput=[]
var propRegex = /Prop\((.+)\)/gi
var propArr = [];
var propNameArr = new Set();
var modelledNatFuns = []
var optPes=""





const {performance} = require('perf_hooks');
const e = require('express');
const { includes } = require('lodash');
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

function parse_fg(dynTraceInfo,statFlwGrph,statCallGraph,dynCallGraph,optPes){

StatFlow = statFlwGrph
jsonToGraph(StatFlow)

dynTrace = dynTraceInfo
scallGraph= statCallGraph
dcallGraph= dynCallGraph
optPes=optPes

for(var item of Object.keys(scallGraph)){
        if(item.endsWith("(Native)")){
                modelledNatFuns.push(item.split("_").pop())
        }
}

for(var item of dynTrace){
        if(!(item["src"] in missingFuncs)){
                missingFuncs[item["src"]]=[]
        }
        missingFuncs[item["src"]].push(item["dest"])
        if(!(item["dest"] in missingFuncLocs)){
                missingFuncLocs.push(item["dest"])
        }
}
var t0 = performance.now()
keys = Array.from(output.getNodes());
var t1 = performance.now()
console.log("Call to getNodes took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now()
for(var item of dynTrace){
     try{
        if(typeof item["trace"][0] === "string"){
                if(optPes=="OPT"){
                        finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":item["trace"][0]})
                }else{
                        if(item["trace"][0]=="Calls from unmodelled native functions"){
                                if(modelledNatFuns.includes(item["src"])){
                                        finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":"Path missed due to Parameter Pass: "+item["src"]+" and "+item["dest"]})
                                }else{
                                        finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":item["trace"][0]})
                                }
                                
                        }else{
                                finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":item["trace"][0]}) 
                        }
                        
                }
        }else {
                var trace = item["trace"]
                var missingPaths = []
                if (Array.isArray(trace) && trace.length>0){
                        //reason partially filtered traces
                        //if( typeof trace[0]==="string" || (trace[0].typ!=="Create" && trace[0].typ!=="InvokeReturn" ) || trace.length==1){
                        if(Array.isArray(trace[0])){
                                if(trace[0][0]==="Use of With"){
                                        missingPaths.push("Use of With")
                                }else if(trace[0][0]==="Dynamic Trace could not be filtered partially"){
                                        missingPaths.push("Dynamic Trace could not be filtered partially")
                                }
                                var start=1
                                //latest
                                if(["LocRead","LexRead","Get","InvokeReturn"].includes(trace[1]["typ"])){
                                        start=3
                                }else{
                                        start=2
                                }
                                for(var i=start;i<trace.length-2;i+=2){
                                        if(i+2<=trace.length-1){
                                        missingPaths.push(findPath(trace[i],trace[i+2],[trace,i,i+2],optPes));
                                        }
                                }
                                if(trace.length-3>=0){
                                        if(["apply (Native)","call (Native)"].some(element => item["src"].includes(element))){
                                                missingPaths.push(findPath(trace[trace.length-2],trace[trace.length-1],[trace,(trace.length-2),(trace.length-1)],optPes,true))
                                        }else{
                                                missingPaths.push(findPath(trace[trace.length-2],trace[trace.length-1],[trace,(trace.length-2),(trace.length-1)],optPes))
                                        }
                                }
                        }else{
                                for(var i=0;i<trace.length-2;i+=2){
                                        missingPaths.push(findPath(trace[i],trace[i+2],[trace,i,i+2],optPes));
                                }
                                //identify calls to getters/setters
                                if(trace[trace.length-1].typ=="InvokeGetter" || trace[trace.length-1].typ=="InvokeSetter"){
                                        missingPaths.push("Call to Getter/Setter")
                                }
                                else{
                                        if(["apply (Native)","call (Native)"].some(element => item["src"].includes(element))){
                                                missingPaths.push(findPath(trace[trace.length-2],trace[trace.length-1],[trace,(trace.length-2),(trace.length-1)],optPes,true))
                                        }else{
                                                missingPaths.push(findPath(trace[trace.length-2],trace[trace.length-1],[trace,(trace.length-2),(trace.length-1)],optPes))
                                        }
                                }
                        }
                }

                finalOutput.push({"source":item["src"],"destination":item["dest"],"reasons":missingPaths})
        }
     }catch(e){
                console.log(item)
     }
}
var t1 = performance.now()
console.log("Call to findPath took " + (t1 - t0) + " milliseconds.")
return [finalOutput,propArr,Array.from(propNameArr)];
}


function findPath(src,sink,inter,optPes,applycall = false){
        var src_ptrn=parse(src);
        var sink_ptrn=parse(sink,applycall);
        
        var stat_src= existsItem(src_ptrn);
        var stat_sink= existsItem(sink_ptrn); 
        
        if(stat_src==-1){ return "Creation via Function Constructor: "+src_ptrn+" and "+ (stat_sink === null || stat_sink.length === 0?sink_ptrn:stat_sink) }
        if(stat_src==-5){ return "Calls to bounded functions"}
        if(stat_src==-2){ 
                return("Use of Eval: "+src_ptrn+" and "+sink_ptrn)
        }else if (stat_src==-3){
                return("Eval via New Function: "+src_ptrn+" and "+sink_ptrn)
        }       
        if(stat_sink==-2){ 
                return("Use of Eval: "+src_ptrn+" and "+sink_ptrn)
        }else if (stat_sink==-3){
                return("Eval via New Function: "+src_ptrn+" and "+sink_ptrn)
        }else if (stat_sink==-5){
                return "Calls to bounded functions"
        }
        //Source/Destination key may not exist in SFG
        if ((stat_src === null ||  stat_src.length === 0))
        {       //Property Names missing from Static Flow Graph
                if(typeof src_ptrn === "string" && src_ptrn.startsWith("Prop")){
                                if(src.from!=null){
                                propNameArr.add(src.from)
                                }
                }
                if((typeof src_ptrn === "string" && src_ptrn.startsWith("Prop")) || (typeof sink_ptrn === "string" && sink_ptrn.startsWith("Prop"))){
                        //Dynamic Property Access Reasoning
                        if(src.typ == "Get"){
                                        var propItem = ["Get Key",src.loc,src.from,inter[0][inter[1]-1].loc]

                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                        }
                        if(sink.typ == "Get"){
                                        var propItem = ["Get Key",sink.loc,sink.from,inter[0][inter[2]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                        }
                                return("Dynamic Property Access between: "+src_ptrn+" and "+stat_sink )
                }else{
                        if(typeof src_ptrn === "string" && src_ptrn.startsWith("Ret(Func") && src_ptrn.includes("(Native)")){
                                return "Calls from unmodelled native functions"
                        }else{
                                return("Source not found: "+src_ptrn)
                        }
                }
                
        }
        else if (stat_sink === null ||  stat_sink.length === 0){
                //Property Names missing from Static Flow Graph
                if(typeof sink_ptrn === "string" && sink_ptrn.startsWith("Prop")){
                        if(sink.from!=null){ 
                        propNameArr.add(sink.from)
                        }
                }
                if((typeof src_ptrn === "string" && src_ptrn.startsWith("Prop")) || (typeof sink_ptrn === "string" && sink_ptrn.startsWith("Prop"))){
                        //Dynamic Property Access Reasoning
                        if(src.typ == "Get"){
                                        var propItem = ["Get Key",src.loc,src.from,inter[0][inter[1]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                        }
                        if(sink.typ == "Get"){
                                        var propItem = ["Get Key",sink.loc,sink.from,inter[0][inter[2]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                        }
                                return("Dynamic Property Access between: "+stat_src+" and "+sink_ptrn )
                }else{
                        if (typeof sink_ptrn === "string" && sink_ptrn.startsWith("ReflectiveCallee") && inter[0][inter[1]-1].typ==='Declare'){
                                return("Path missed due to Parameter Pass: "+stat_src+" and "+sink_ptrn)
                        }else{
                                if(typeof src_ptrn === "string" && src_ptrn.startsWith("Ret(Func") && src_ptrn.includes("(Native)")){
                                        return "Calls to unmodelled native functions"
                                }else{
                                        return("Destination not found: "+sink_ptrn)
                                }
                        }
                }
        }
        else{   
                stat_src= typeof stat_src === 'string' ? [stat_src] : stat_src;
                stat_sink= typeof stat_sink === 'string' ? [stat_sink] : stat_sink;
                if (stat_src.some(el=> stat_sink.includes(el)) === true){
                        return("Source and Destination are same: "+stat_src);
                }
                else if (getPath(stat_src,stat_sink)=== false){
                        var prop_src = propRegex.exec(stat_src);
                        propRegex.lastIndex=0;
                        var prop_sink = propRegex.exec(stat_sink);
                        propRegex.lastIndex=0;
                        if(prop_src == null && prop_sink ==null){
                                if(src.typ == "InvokeReturn"){
                                        var intcl_src = Object.keys(missingFuncs).filter(el => el.includes(src.loc))
                                        if(missingFuncs[intcl_src] && missingFuncs[intcl_src].includes(src["ret"][0]["retLoc"])){
                                                var dep_cl = finalOutput.filter(val => val["source"]==intcl_src && val["destination"]==src["ret"][0]["retLoc"])
                                                if(!dep_cl){
                                                        console.log("reason not found",intcl_src,src["ret"][0]["retLoc"])
                                                }else{
                                                                var key= "Path missing for interdependent call between: "+stat_src+" and "+stat_sink
                                                                var new_obj={}
                                                                new_obj[key]=dep_cl
                                                                return(new_obj) ;

                                                }
                                        }else{
                                                var intcl_sink= sink.loc
                                                if((sink.typ=="LexRead" || sink.typ=="LocRead") && inter[0][inter[2]-1].typ=="Declare"){
                                                        intcl_sink= inter[0][inter[2]-1].loc
                                                }
                                                if(missingFuncs[intcl_src] && missingFuncs[intcl_src].includes(intcl_sink)){
                                                        var dep_cl = finalOutput.filter(val => val["source"]==intcl_src && val["destination"]==intcl_sink)
                                                        if(!dep_cl){
                                                                console.log("reason not found",intcl_src,sink["ret"][0]["retLoc"])
                                                        }else{
                                                                        var key= "Path missing for interdependent call between: "+stat_src+" and "+stat_sink
                                                                        var new_obj={}
                                                                        new_obj[key]=dep_cl
                                                                        return(new_obj) ;

                                                        }
                                                }
                                                else if(inter[0][inter[2]-1].typ=="Declare"){
                                                        return("Path missed due to Parameter Pass: "+stat_src+" and "+stat_sink)

                                                }else{
                                                        return("Path missing for Function Return between: "+stat_src+" and "+stat_sink)
                                                }
                                        }
                                }
                                if(sink.typ == "InvokeReturn"){
                                        var intcl_src = Object.keys(missingFuncs).filter(el => el.includes(sink.loc))
                                        if(missingFuncs[intcl_src] && missingFuncs[intcl_src].includes(sink["ret"][0]["retLoc"])){
                                                var dep_cl = finalOutput.filter(val => val["source"]==intcl_src && val["destination"]==sink["ret"][0]["retLoc"])
                                                if(!dep_cl){
                                                        console.log("reason not found: ",intcl_src,sink["ret"][0]["retLoc"])
                                                }else{
                                                        var key= "Path missing for interdependent call between: "+stat_src+" and "+stat_sink
                                                        var new_obj={}
                                                        new_obj[key]=dep_cl
                                                        return(new_obj) ;
                                                }

                                        }else{
                                                var enc_src = getEncFunc(src.loc)
                                                var intcl_src = getCaller([enc_src],sink.loc)
                                                if(missingFuncs[intcl_src] && missingFuncs[intcl_src].includes(sink.loc)){
                                                        var dep_cl = finalOutput.filter(val => val["source"]==intcl_src && val["destination"]==sink.loc)
                                                        if(!dep_cl){
                                                                console.log("reason not found: ",intcl_src,sink.loc)
                                                        }else{
                                                                var key= "Path missing for interdependent call between: "+stat_src+" and "+stat_sink
                                                                var new_obj={}
                                                                new_obj[key]=dep_cl
                                                                return(new_obj) ;
                                                        }
                                                }
                                                else{
                                                        console.log("edge not found: ",src,sink)
                                                }
                                        }
                                }
                                if(["LexRead","LocRead"].includes(src.typ) || ["LexRead","LocRead"].includes(sink.typ)){
                                        if(missingFuncs[src.eloc] && missingFuncs[src.eloc].includes(sink.loc)){
                                                var dep_cl = finalOutput.filter(val => val["source"]==src.eloc && val["destination"]==sink.loc)
                                                if(dep_cl.length == 0 ){
                                                        console.log("reason not found",intcl_src,intcl_sink)
                                                }else{
                                                        var key= "Path missing for interdependent call between: "+stat_src+" and "+stat_sink
                                                        var new_obj={}
                                                        new_obj[key]=dep_cl
                                                        return(new_obj) ;
                                                }
                                        }else{
                                                var intcl_sink= sink.loc
                                                if(sink.typ=="LexRead" && inter[0][inter[2]-1].typ=="Declare"){
                                                        intcl_sink= inter[0][inter[2]-1].loc
                                                }
                                                var intcl_src = getCaller([src.eloc],intcl_sink)
                                                if(missingFuncs[intcl_src] && missingFuncs[intcl_src].includes(intcl_sink)){
                                                        var dep_cl = finalOutput.filter(val => val["source"]==intcl_src && val["destination"]==intcl_sink)
                                                        if(!dep_cl){
                                                                console.log("reason not found",intcl_src,intcl_sink)
                                                        }else{
                                                                var key= "Path missing for interdependent call between: "+stat_src+" and "+stat_sink
                                                                var new_obj={}
                                                                new_obj[key]=dep_cl
                                                                return(new_obj) ;
                                                        }
                                                }
                                        }
                                }
                                if(src.typ=="Create"){
                                        var enc_src = getEncFuncOfDef(stat_src.toString())
                                        var intcl_sink= sink.loc
                                        if(sink.typ=="LexRead" && inter[0][inter[2]-1].typ=="Declare"){
                                                intcl_sink= inter[0][inter[2]-1].loc
                                        }
                                        var intcl_src = getCaller([enc_src],intcl_sink)
                                        if(missingFuncs[intcl_src] && missingFuncs[intcl_src].includes(intcl_sink)){
                                                var dep_cl = finalOutput.filter(val => val["source"]==intcl_src && val["destination"]==intcl_sink)
                                                if(!dep_cl){
                                                        console.log("reason not found: ",intcl_src,intcl_sink)
                                                }else{
                                                        var key= "Path missing for interdependent call between: "+stat_src+" and "+stat_sink
                                                        var new_obj={}
                                                        new_obj[key]=dep_cl
                                                        return(new_obj) ;
                                                }
                                        }

                                        
                                }
                                //if formal parameter
                                if(inter[0][inter[2]-1].typ=="Declare"){
                                        var applyCaller=[];
                                        var app_src = src.eloc
                                        if(src.typ=="Create"){
                                                app_src= getEncFuncOfDef(stat_src.toString())
                                        }
                                        return("Path missed due to Parameter Pass: "+stat_src+" and "+stat_sink) 
                                }
                                if(inter[0][inter[1]-1].typ=="Declare"){
                                        return("Path missed due to Parameter Pass: "+stat_src+" and "+stat_sink) 
                                }
                                        return("Path missing between: "+stat_src+" and "+stat_sink);
                        }else{
                                //Dynamic Property Access Reasoning
                                if(prop_src!=null && src.typ=="Get"){
                                        var propItem = ["Get Key",src.loc,src.from,inter[0][inter[1]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                                }
                                if(prop_sink!=null && sink.typ=="Get"){
                                        var propItem = ["Get Key",sink.loc,sink.from,inter[0][inter[2]-1].loc]
                                        var indx = propArr.findIndex((val) => JSON.stringify(val)===JSON.stringify(propItem));
                                        if(indx==-1){
                                                propArr.push(propItem)
                                        }
                                }
                                if(optPes=="OPT"){
                                                return("Dynamic Property Access between: "+stat_src+" and "+stat_sink)
                                }else if (optPes=="PES"){
                                //pessimistic parameter pass
                                        if(prop_src!=null && src.typ=="Get" && inter[0][inter[2]-1].typ=="Declare"){
                                                return("Path missed due to Parameter Pass: "+stat_src+" and "+stat_sink)
                                        }else if((prop_src!=null && src.typ=="Get" && inter[0][inter[1]-1].comp==="arguments") || (prop_sink!=null && sink.typ=="Get" && inter[0][inter[2]-1].comp==="arguments")){
                                                return("Path missed due to Parameter Pass: "+stat_src+" and "+stat_sink)
                                        }else if(src.typ=="InvokeReturn" && sink.typ=="Get"){
                                                return("Path missing for Function Return between: "+stat_src+" and "+stat_sink)
                                        }
                                        else{
                                                return("Dynamic Property Access between: "+stat_src+" and "+stat_sink)
                                        }
                                }
                        }
                }
                else if (getPath(stat_src,stat_sink)=== true){
                        return("Path found between: "+stat_src+" and "+stat_sink)
                }
        }
}
function getCaller(encfuncset,callee){
        var encFuncs = Object.keys(scallGraph)
        for(var encfunc of encfuncset){
                if(encFuncs.includes(encfunc)){
                        for (var ckey in scallGraph[encfunc]) {
                                var intcl_src = Object.keys(missingFuncs).filter(el => ckey===el || ckey.includes(el) || el.includes(ckey))
                                if(intcl_src){
                                        if(missingFuncs[intcl_src] && missingFuncs[intcl_src].includes(callee)){
                                                return intcl_src;
                                        }
                                }
                        }
                }
        }
}
function getEncFunc(node){
        var encFuncs = []
        for(var mkey of Object.keys(scallGraph)){
                for (var ckey in scallGraph[mkey]) {
                        if(!(ckey.startsWith("file:")) && ckey.includes(node)){
                                encFuncs.push(mkey);
                        }
                }
        }
        return encFuncs

}
function getEncFuncOfDef(node){
        if(Object.keys(StatFlow).includes(node)){
                for (var ckey of StatFlow[node]) {
                        if(ckey.includes("%ssa_val")){
                                var addr = regex2.exec(ckey)
                                regex2.lastIndex=0
                                if(addr!==null){
                                        return addr[1]
                                }
                        }
                }
        }

}
function getEncFuncCall(applyNode,node){
        for(var mkey of Object.keys(scallGraph)){
                if(mkey.includes(node)){
                        for (var ckey in scallGraph[mkey]) {
                                var values = scallGraph[mkey][ckey]
                                for(var val of values){
                                        if(val.includes(applyNode)){
                                                return true;
                                        }
                                }
                        }
                }
        }

}
function getApplyCallers(node){
        var applyCallers=[]
        if(typeof node==="string"){
                for (var key of Object.keys(dcallGraph)) {
                        if( key.startsWith("apply (Native)") && dcallGraph[key].includes(node)){
                                applyCallers.push(key)
                        }
                }
        }
        return applyCallers;
}
function getPath(stat_src,stat_sink,ifAtAll=false){
        //new changes to find paths even with unknown
        for(var src of stat_src){
                for(var sink of stat_sink){
                        if (output.getPath(src,sink,ifAtAll) === true){
                                return true
                        }

                }
        }
        return false;
}
function existsItem(input){
        //return input if exact match else list of matching values
        if(input.includes("(Native)")){
                if(input.startsWith("Ret(Func(Function")){
                        return -1
                }else if(input.startsWith("Ret(Func(bound")){
                        return -5
                }
        }
        if(typeof input === "string"){
                if(input.includes("eval:")){
                        return -2
                }else if(input.includes("evalIndirect:")){
                        return -3
                }
                else if(input.startsWith("LexVar")){
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
                if(input[0].includes("eval:")){
                        return -2
                }else if(input[0].includes("evalIndirect:")){
                        return -3
                }
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
                //to look for lexvar when var no match found
                if(input[0].startsWith("Var(") && finlmatches.length==0){
                        var sections= input[0].split(":")
                        var charSpaces = sections.slice(-1).toString().split("-")
                        var startChar = charSpaces.slice(0,1).toString()
                        var lexvarItem=sections[0].split("@")[0]
                        if(startChar!=="0"){
                                lexvarItem+= "@"+startChar
                        }
                        return existsItem("Lex"+lexvarItem+", "+input[1]+")")
                }else{
                        return finlmatches;    
                }
        }
}

function parse(inp,applycall){ 
        if(inp.typ==="Create"){
                return "Func("+inp.loc+")"
        }
        else if(inp.typ==="Get"){
                return "Prop("+inp.from+")"
        }
        else if(inp.typ==="LexRead"){
                if(inp.loc.endsWith('.js')){
                        return "Prop("+inp.from.split(":")[1]+")";
                }else {
                        return "LexVar("+inp.loc+", "+inp.from.split(":")[1]+")"
                }
        }
        else if(inp.typ==="LocRead"){
                if(inp.curr==="Global"){
                        return "Prop("+inp.from.split(":")[1]+")";
                }
                else{
                        return ["Var("+inp.loc,inp.from.split(":")[1]]
                }
        }
        else if(inp.typ==="InvokeReturn"){
                //to get native function name
                if(inp["ret"][0]["retLoc"]!=="None"){
                        return "Ret(Func("+inp["ret"][0]["retLoc"]+"))"
                }else{
                        return "Ret(Func("+inp["funName"]+" (Native)))"
                }
        }
        else if(inp.typ==="InvokeCall" || inp.typ==="InvokeGetter" || inp.typ==="InvokeSetter"){
                if(applycall){
                        return "ReflectiveCallee("+inp.loc+")";
                }else{
                        return "Callee("+inp.loc+")";
                }
        }
        else{
                return inp;
        }
}

module.exports={
        parse_fg
      }