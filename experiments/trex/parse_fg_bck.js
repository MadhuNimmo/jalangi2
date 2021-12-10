const fs = require('fs');
var Graph = require('../metrics/Graph.js');
var output = new Graph();
var missingPaths = []
var regex = /(\S+)\,\s\[(.*?)\]/gi

const {performance} = require('perf_hooks');
//const { Console } = require('console');

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
var StatFlow = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
jsonToGraph(StatFlow)

var DynTrace = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
//console.log(output.getSize())
var t0 = performance.now()
//changed from getNodes to getAllNodes i.e. values only to kays and values
var keys = Array.from(output.getAllNodes());
var t1 = performance.now()
console.log("Call to getNodes took " + (t1 - t0) + " milliseconds.")

var t0 = performance.now()
for(var i=0;i<DynTrace.length-1;i++){
        findPath(DynTrace[i],DynTrace[i+1],i);
}
//console.log(output.getPath("Func(/home/anon/jalangi2/experiments/trex/ft_newfun.js@2:32-58)","Callee(/home/anon/jalangi2/experiments/trex/ft_newfun.js@5:83-86)"))

var t1 = performance.now()
console.log("Call to findPath took " + (t1 - t0) + " milliseconds.")
function findPath(src,sink,last){
        
        var src_ptrn=parse(src,last);
        var sink_ptrn=parse(sink,last+1);
        // in some case , we have SFG key patterns in pace of keys
        // existsItem searches and returns matching keys
        var stat_src= existsItem(src_ptrn);
        var stat_sink= existsItem(sink_ptrn); 
        
        //console.log(src,sink,src_ptrn,sink_ptrn,stat_src,stat_sink);
        //Source/Destination key may not exist in SFG
        if (stat_src === null ||  stat_src.length === 0)
        {
                console.log("Source not found: ",src_ptrn)
                
        }
        else if (stat_sink === null ||  stat_sink.length === 0){
                console.log("Destination not found: ",sink_ptrn)
        }
        else{   
                stat_src= typeof stat_src === 'string' ? [stat_src] : stat_src;
                stat_sink= typeof stat_sink === 'string' ? [stat_sink] : stat_sink;
                
                if (stat_src.some(el=> stat_sink.includes(el)) === true){
                        console.log("source and destination are same")
                        return;
                }
                else if (getPath(stat_src,stat_sink)=== false){
                        console.log("no path")
                        missingPaths.push([stat_src,stat_sink])
                        return;
                }
                console.log("yes path")
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

function parse(inp,last){ //last no more required as we got rid of invokereturn fpr callee
        if(inp.typ==="Create"){
                return "Func("+inp.loc+")"//["Func"+inp.loc];
        }
        else if(inp.typ==="Get"){
                return "Prop("+inp.from.split(":")[1]+")"//["Prop("+inp.from.split(":")[1]+")"]
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
               //kabhi ret() kabhi ret(func())
                        return "Ret(Func("+inp["ret"][0]["retLoc"]+"))"
        }
        else if(inp.typ==="InvokeCall"){
                        return "Callee("+inp.loc+")";
        }
}