const fs = require('fs')
let filePath = process.argv[2];
let outPath = process.argv[3];
let oneReasonEdges=0
let mulReasonEdges=0


if (process.argv.length < 3) {
    console.log("Please provide argument for the path to the local JSON file.")
    return;
}

const rawData = fs.readFileSync(filePath)
const parsedData = JSON.parse(rawData)

// Object to store edge details.
class EdgeDetails{
    constructor(src, dest){
        this.source = src;
        this.destination = dest;
        this.paths = 0;
        this.missedPaths = 0;
    }
}

// Count of paths and edges.
let edges = parsedData.length
let totalPaths = 0
let missedPaths = 0
let foundPaths = 0

// Maps to store reasons.
let parentReasonMap = new Map()
let childReasonMap = new Map()
let totalReasonMap = new Map()
let resultsMap = new Map()
let msngReasons = new Object()

let edgeCnt = 0;
// Keep track of top level edge with the maximum number total paths as well as top level edge with the maximum number of missed paths 
let currentMaxEdge = new EdgeDetails("","");
let currentMaxMissedEdge = new EdgeDetails("","");
let newMaxEdge;

// Function to insert reasons into map and increment count as needed.
function reasonInserter(map, reason){
    if(map.has(reason)){
        map.set(reason, map.get(reason) + 1)
    }else{
        map.set(reason, 1)
    }
}

// Function to increment found/missed/total paths on only on top level edges.
function pathIncrementer(pathStr, role){
    // if(role == "parent"){
        if(pathStr.includes("Path found") || pathStr.includes("Source and Destination are same")){
            foundPaths += 1
        }else{
            if(!pathStr.includes("Path missing for interdependent call between")){
                missedPaths += 1
                if(edgeCnt == 1){
                    currentMaxEdge.missedPaths += 1
                    currentMaxMissedEdge.missedPaths += 1
                }else{
                    newMaxEdge.missedPaths += 1
                }
            }
        }
        if(edgeCnt == 1){
            currentMaxEdge.paths += 1
            currentMaxMissedEdge.paths += 1
        }else{
            newMaxEdge.paths += 1
        }
        totalPaths += 1
    // }
}

// Function to convert map to object.
function mapToObj(input){
    const obj = {};
    for (const key of input.keys()) {
        obj[key] = input.get(key);
    }
    return obj;
}

// Self-invoking function to process edges.
(function counter(data, role){
    for(edge of data){
        // Beginning of edge.

        // Save edge details of current edge to be compared to previous edge at the end of the current edge processing. 
        if(role == "parent"){
            if(edgeCnt < 1){
                currentMaxEdge.source = edge.source
                currentMaxEdge.destination = edge.destination
                currentMaxMissedEdge.source = edge.source
                currentMaxMissedEdge.destination = edge.destination
            }else{
                newMaxEdge = new EdgeDetails(edge.source, edge.destination)
            }
            edgeCnt = edgeCnt + 1
        }

        var reasons = edge.reasons;
    
        // Begin processing reasons
        if(reasons != null){
            if(typeof(reasons) == "string"){// Reason is a string.
                // Insert reason into appropriate map.
                // if(reasons.startsWith("Dynamic Property Access between")){
                //     reasons = "Dynamic Property Access between"
                // }
                reasons = reasons.split(":")[0]
                reasonInserter(totalReasonMap, reasons)
                if(role == "parent"){
                    if(!Object.keys(msngReasons).includes(reasons)){
                        msngReasons[reasons]=1
                    }else{
                        msngReasons[reasons]=msngReasons[reasons]+1
                    }

                    reasonInserter(parentReasonMap, reasons)
                }else{
                    reasonInserter(childReasonMap, reasons)
                }
                
                pathIncrementer(reasons, role)
            }else{ // There is a list of reasons.
                for(reason of reasons){
                    let reasonDesc;

                    try{
                        reasonDesc = reason.split(":")[0]


                    }catch(error){// Reason is an interdependent call object.
                        for(interdependentCall in reason){
                            reasonDesc = interdependentCall.split(":")[0]

                            // Insert reason into appropriate map.
                            reasonInserter(totalReasonMap, reasonDesc)
                            if(role == "parent"){
                                if(!Object.keys(msngReasons).includes(interdependentCall)){
                                    msngReasons[interdependentCall]=1
                                }else{
                                    msngReasons[interdependentCall]=msngReasons[interdependentCall]+1
                                }

                                reasonInserter(parentReasonMap, reasonDesc)
                            }else{
                                reasonInserter(childReasonMap, reasonDesc)
                            }

                            pathIncrementer(reasonDesc, role)
                            counter(reason[interdependentCall], "child") // Handle nested calls.
                        }
                        continue
                    }
                        
                    // Insert reason into appropriate map.
                    reasonInserter(totalReasonMap, reasonDesc)
                    if(role == "parent"){
                        var msngCause=""

                        if(typeof reason=="string"){
                            msngCause = reason
                        }else{
                            msngCause = Object.keys(reason)[0]
                        }
                            
                        if(!Object.keys(msngReasons).includes(msngCause)){
                            msngReasons[msngCause]=1
                        }else{
                            msngReasons[msngCause]=msngReasons[msngCause]+1
                        }

                        reasonInserter(parentReasonMap, reasonDesc)
                    }else{
                        reasonInserter(childReasonMap, reasonDesc)
                    }

                    pathIncrementer(reasonDesc, role)
                }
            }
        }
        // End of edge.
        
        if( !(typeof edge.reasons == "string")){
            var cnt=0
            var dyncnt=0
            var flag=false
            for(var item of edge.reasons){
                if(typeof item === 'string'){
                    if(!item.startsWith("Path found") && !item.startsWith("Source and Destination are same") && item.includes("between")){
                        cnt+=1
                    }
                    if(item.includes("Dynamic Property Access")){
                        dyncnt+=1
                        flag=true
                    }
                }
            }
            if(flag){
                if(cnt==dyncnt){
                    oneReasonEdges+=1
                }else{
                    mulReasonEdges+=1
                }
            }
        }
        // Check if we have new max edges, except on the first edge as there are no edges to compare it to.
        if(edgeCnt > 1){
            if(newMaxEdge.paths > currentMaxEdge.paths){
                currentMaxEdge = newMaxEdge
            }
            if(newMaxEdge.missedPaths > currentMaxMissedEdge.missedPaths){
                currentMaxMissedEdge = newMaxEdge
            }
        }
    }
})(parsedData, "parent")

const avgMissedPaths = missedPaths / edges

resultsMap.set("Totals", {"Number of edges": edges, "Number of missed paths": missedPaths, "Number of paths found": foundPaths, "Average number of missed path/edge": avgMissedPaths})
resultsMap.set("Reason Count",mapToObj(parentReasonMap));
resultsMap.set("Interdependent Reasons Count", mapToObj(childReasonMap));
resultsMap.set("Total Reason Count", mapToObj(totalReasonMap));
const totals=  {"Number of edges": edges, "Number of missed paths": missedPaths, "Number of paths found": foundPaths, "Average number of missed path/edge": avgMissedPaths}
console.log("Totals:")
console.log(totals)
console.log("Reason Count:")
console.log(parentReasonMap)
console.log("Interdependent Reasons Count:")
console.log(childReasonMap)
console.log("Total Reason Count:")
console.log(totalReasonMap)
console.log("Repeated Missing Reasons:")

for(item of Object.keys(msngReasons)){
    if((!item.startsWith("Path found") && !item.startsWith("Source and Destination are same")) && item.includes("between") && msngReasons[item]>5){
        console.log(item +" : "+ msngReasons[item])
    }
}

console.log("Edge with maximum no of paths: ")
console.log(currentMaxEdge)
console.log("Edge with maximum no of missed paths: ")
console.log(currentMaxMissedEdge)

console.log("Edges with 1 reason: ")
console.log(oneReasonEdges)
console.log("Edges with more than 1 reason: ")
console.log(mulReasonEdges)
resultsMap.set("Edge with maximum no of paths",currentMaxEdge);
resultsMap.set("Edge with maximum no of missed paths",currentMaxMissedEdge);
var name = outPath.split("/").pop()

fs.writeFile(outPath+"/"+name+"_resultCount.json", JSON.stringify(mapToObj(resultsMap), null, 2), (err) => {
    if(err){
        console.error(err);
        return;
    }
});

/*
Execution format:
node counts.js /path/to/json/file.json /path/to/output/
Sample:
node counts.js /home/anon/research/counts/sample/todo_angularjs_causes.json /home/anon/research/counts/results/
*/