var fs = require('fs');
var {flowProcess} = require('./flowProcess');
const { exit } = require('process');
var trace = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
var inputDir = (process.argv[3]).toString();

//processing the trace beforehand
trace = flowProcess(trace,inputDir)
//finding the approprate trace item with respect to the concerned call
//there might be multiple function calls from a particular location
//we are considering any 1/ the first one found for now
input = findInput(trace, input)

var input =  "/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newfun.js@5:83-86"
/*{
        "typ": "InvokeCall",
        "funName": "anon",
        "identity": "FunNon:15",
        "loc": "(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_newfun.js:5:1:5:4)"
}    */
//{"typ":"InvokeCall","funName":"anon","identity":"FunNon:1387","loc":"(/tmp/knockout_rev/knockout-3.5.0.debug_orig_.js:4647:46:4647:94)"}
//{"typ":"InvokeCall","funName":"event_handler","identity":"FunNon:15843","loc":"(/tmp/react15_rev/react-dom_orig_.js:8928:9:8928:16)"}
//{"typ":"InvokeReturn","funName":"anon","identity":"FunNon:969","loc":"(knockout-3.5.0.debug_orig_.js@4647:46:4647:94)","ret":null}
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
var Copies = [];
var pathCopies = [];
//processing the trace beforehand
trace = flowProcess(trace,inputDir)
//finding the approprate trace item with respect to the concerned call
//there might be multiple function calls from a particular location
//we are considering any 1/ the first one found for now
input = findInput(trace, input)
//console.log(input)
//console.log(nimmo)
function findInput(trace, input) {
        var i=0;
        while (i <trace.length) {
                        if (trace[i]["typ"]==="InvokeCall" && trace[i]["loc"] === input) {
                                return trace[i]                              
                        }
                i++;
                }  
        return null;     
}
function findRelevantTrace(trace, input) {
        var i=0;
        var output=[];
        var inpIndex = trace.findIndex((val) => isEquivalent(val, input));
        if (inpIndex == -1) {
                console.log("Function Invocation not found")
                return;
        }
        while (i <trace.length) {
                        if (["LocRead","LexRead", "Create", "Write","Declare","Return","InvokeCall"].includes(trace[i]["typ"]) && trace[i]["identity"] === input["identity"]) {
                                output.push(trace[i])                                
                        }
                        else if(trace[i]["typ"] == "InvokeReturn"){        
                                if (trace[i]["ret"] != null) {
                                                if (trace[i]["ret"][0]["retId"] == input["identity"]) {
                                                        output.push(trace[i])
                                                }
                                        }
                                else if (trace[i]["identity"] == input["identity"]){
                                        output.push(trace[i])
                                }
        

                        }
                        else if (trace[i]["typ"] === "Put" && (trace[i]["to"].includes(input["identity"]) || trace[i]["identity"] === input["identity"])){
                                output.push(trace[i])
                        }
                        else if (trace[i]["typ"] === "Get" && (trace[i]["from"].includes(input["identity"]) || trace[i]["identity"] === input["identity"])){
                                output.push(trace[i])
                        }
                       
                i++;
                }       
        return output;

}

function findRelevantCopies(trace, input) {
        funcId = input["identity"];
        //var initIndex = trace.findIndex((val) => isEquivalent(val, input));
        var initIndexes = []
        //if there are multiple calls to the function from the same loc
        function getAllIndexes(arr, val) {
                for(i = 0; i < arr.length; i++)
                    if (isEquivalent(arr[i], val))
                        initIndexes.push(i);
                return initIndexes;
            }
        getAllIndexes(trace,input)
       
        if (initIndexes.length == 0) {
                console.log("Function Invocation not found")
                exit(0);
        }
        for(initIndex of initIndexes){
                writeValues = [];
                readValues = [];
                bindValues = [];
                precVarWrite = {};
                precVarRead = {};
                precReadCreate = {};
                readIndex = 0;
                writeIndex = 0;
                pathCopies=[]
                traceIndex=0;
                //console.log(precReadOrCreate(trace, initIndex, funcId, ["Read", "Create", "Get", "InvokeReturn"]))
                [precReadCreate, readIndex] = precReadOrCreate(trace, initIndex, funcId, ["LocRead","LexRead", "Create", "Get", "InvokeReturn"])//precReadOrCreate(trace,initIndex,funcInv);
                traceIndex = readIndex;
                pathCopies.push(precReadCreate)
                //console.log(precReadCreate)
                while (precReadCreate['typ'] != "Create" && traceIndex >= 0) {
                        writeValues = precWrite(trace, readIndex, funcId);
                        /*if(writeValues ===undefined){
                                break;
                        }*/
                        precVarWrite = writeValues[0]
                        writeIndex = writeValues[1]
                        //pathCopies.push(precVarWrite)
                        //console.log(precVarWrite)
                        readValues = precReadOrCreate(trace, writeIndex, funcId, ["LocRead","LexRead", "Create", "Get", "InvokeReturn"]);
                        precVarRead = readValues[0]
                        readIndex = readValues[1]
                        pathCopies.push(precVarRead)
                        //console.log(precVarRead)
                        precReadCreate = precVarRead

                        traceIndex = traceIndex - 1;
                }
                pathCopies.unshift(input)
                Copies.push(pathCopies)
        }
        return Copies
}
function precReadOrCreate(trace, index, id, ops) {
        //console.log(returnPrec(trace, index, id, ops))
        return returnPrec(trace, index, id, ops)
}

function precWrite(trace, index, id) {
        if (trace[index]["typ"] == "LocRead" || trace[index]["typ"] == "LexRead") {
                return returnPrec(trace, index, id, ["Write","Declare"] )//["Write","Declare", "ParameterPass"])
        }
        else if (trace[index]["typ"] == "Get") {
                return returnPrec(trace, index, id, ["Put"])
        }
        else if (trace[index]["typ"] == "InvokeReturn" ){
                return returnPrec(trace, index, id, ["Return"])
        }
}


function returnPrec(trace, index, id, oper) {
        //console.log(index, id, oper)
        var i = index - 1;
        while (i >= 0) {
                if (oper.includes(trace[i]["typ"])) {
                        if (trace[i]["typ"] == "InvokeReturn" && trace[i]["funName"] !== "Function") {
                                if (trace[i]["ret"] != null) {
                                                if (trace[i]["ret"][0]["retId"] == id) {
                                                        if(trace[i]["funName"]=="bind" && trace[i]["identity"].includes("FunNat")){
                                                                bindValues = precReadOrCreate(trace, index, trace[i]["identity"] , ["Get"])
                                                                funcId= bindValues[0]["from"].endsWith(":bind")? (bindValues[0]["from"]).split(":bind")[0] : funcId
                                                                bindValues = precReadOrCreate(trace, bindValues[1],  funcId, ["LocRead","LexRead"])
                                                                return [bindValues[0],bindValues[1]]

                                                        }   
                                                        return [trace[i], i]
                                                }
                                        }

                        }
                        /*else if (trace[i]["typ"] == "ParameterPass") {
                                if (trace[i]["args"] != null) {
                                                if (trace[i]["args"][0]["argId"] == id) {
                                                        return [trace[i], i]
                                                }
                                        }

                                }*/
                        else if ( (trace[index]["typ"] == "LocRead" || trace[index]["typ"] == "LexRead" ) && (trace[i]["typ"] == "Write" || trace[i]["typ"] == "Declare")){
                                if (trace[i]["to"] == trace[index]["from"] && trace[i]["identity"] == id) {
                                        return [trace[i], i]
                                        }
                        }
                        else if ( (trace[index]["typ"] == "Get" ) && (trace[i]["typ"] == "Put")){
                                if (trace[i]["to"].split(":").slice(-1)[0] === trace[index]["from"].split(":").slice(-1)[0] && trace[i]["identity"] == id) {
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

/*var rel_trace = findRelevantTrace(trace, input)
const json = JSON.stringify(rel_trace, null, 2)
var fs = require('fs');
filename=(process.argv[2]).replace(/trace.json$/,"rel_trace_smem2.json");
fs.writeFileSync(filename, json, 'utf8',function(err) {
if(err) console.log('error', err);
});*/
function main(){


findRelevantCopies(trace, input)

//Copies = flowProcess(Copies,inputDir)
var flow = Copies[0].reverse()
console.log(flow)

//console.log(Copies[0].reverse())

const json = JSON.stringify(flow, null, 2)
var fs = require('fs');
filename=(process.argv[2]).replace(/.json$/,"_path3.json");
fs.writeFileSync(filename, json, 'utf8',function(err) {
if(err) console.log('error', err);
});
}

main();
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