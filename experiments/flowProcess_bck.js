var Graph = require('./Graph.js');
const path = require('path');
//var regex = /(?!\()(\S+)\:[0-9]+\:([0-9]+\:[0-9]+\:[0-9]+)/gi
var regex = /((\S+)\@([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+))/gi


const fs = require('fs');
var filenames = [];
var data = {};
var fileData = {};
var FlowRead= [];
var fileParentDir =""
function main() {
        // Identifying the extension of the input files
        // Generating the output path
        // Identyfing the JS files
        /*fileIdentifier = inputDir.endsWith("/")?(inputDir.split("/").slice(-2)):(inputDir.split("/").slice(-1))
        fileIdentifier = fileIdentifier[0]*/
        readJSFiles(inputDir);
        fileParentDir = path.dirname(inputDir)
        /*for (var item of FlowRead) {
                //for(var val in FlowRead[key]){
                        console.log(item)
                //}
        }*/
        // Formatting json input
        //for (var key of Object.keys(FlowRead)) {
        for (var item of FlowRead) {

                //for(var val in FlowRead[key]){
                        if (item["typ"]=== "LexRead"){
                                //console.log("here",item)
                                item["loc"] = formatFlowRead(item["loc"],true)//.split("@")[0]//+formatFlowRead(item["loc"]).split("@").slice(-1)
                        }
                        else {
                                //console.log("here2",item)
                                item["loc"] = formatFlowRead(item["loc"],false)
                                if(item["typ"]==="InvokeReturn" && item["ret"]!==null){
                                        item["ret"][0]["retLoc"] = formatFlowRead(item["ret"][0]["retLoc"],false)
                                }
                        }
                //}
        }

                // Converting json to graph
        //dynCallGraphEdit = jsonToGraph(dynCallGraph);
        return FlowRead
}

function formatFlowRead(input,lexRead) {
        // Replacing the Row-Column format to Character-Spaces format
        //console.log(input)
        input = input.replace(/_orig_/g, '')
        regex_pattern = regex.exec(input);
        regex.lastIndex=0;
        //console.log(regex_pattern)
        if(regex_pattern!==null){
                var filePath = ""
                if(path.dirname(regex_pattern[2]).split(path.sep)[1]==="tmp"){
                        var intpath = regex_pattern[2].split(path.sep).slice(2).join(path.sep)
                        var fileName = path.join(fileParentDir,intpath);
                        filePath = fileName
                
                }else{
                        fileName=regex_pattern[2]
                        filePath=regex_pattern[2]
                }
                var fileLoc = regex_pattern[3];
                //console.log("here",regex_pattern[2])
                if(filenames.includes(fileName)){  
                        //relevantfiles.push(fileName)  
                        if (!fileData[fileName]){              
                                fileData[fileName] = fs.readFileSync(filePath).toString().split("\n");
                        }
                        var inpJSFile = fileData[fileName]
                        try{
                                /*if (filenames.includes(regex_pattern[0].split(":")[0])) {
                                        inpJSFile = filedata[regex_pattern[0].split(":")[0]]
                                        lineInfo = regex_pattern[0].split(":").slice(1).join(":")*/
                                        if (lexRead){
                                                //input = regex_pattern[0].split(":")[0]+"@"+ (charSpaces(lineInfo, inpJSFile)[0])  
                                                //input = input.split("/").slice(-1).toString()
                                                //need to fix this
                                                input = fileName

                                        }else{
                                                input = fileName+"@"+fileLoc.split(":")[0] + ":" + (charSpaces(fileLoc, inpJSFile).join("-"))
                                                //input = regex_pattern[0].split(":")[0]+"@"+lineInfo.split(":")[0] + ":" + (charSpaces(lineInfo, inpJSFile).join("-"))
                                        }
                        }
                        catch(e){
                                console.log("Formatting issues :" + input)
                        }
                }
        }

       return input;
}

function rowSpaces(line, inpJSFile) {
        // Calculating the char spaces occupied by a line
        cnt = 0;
        for (var m = 0; m < line - 1; m++) {
                cnt += inpJSFile[m].length + 1;
        }
        return cnt
}

function charSpaces(lineInfo, inpJSFile) {
        // Converting the row column to char spaces
        arr = [];
        rowcol = lineInfo.split(":")
        for (k = 0; k < rowcol.length; k += 2) {
                arr.push(rowSpaces(parseInt(rowcol[k]), inpJSFile) + parseInt(rowcol[k + 1]) - 1);
        }
        
        return arr;
}

function readJSFiles(dir) {
        // Reading the javascript files to format the dynamic callgraph
        /*for (val of Object.values(FlowRead)){
                for(item of val){
                        item["loc"]= item["loc"].replace(/_orig_/g, '')
                        //item["loc"]= item["loc"].replace('(evalIndirect', '')
                        var val_match = item["loc"].match(regex)
                        if(val_match){
                                
                                var filePath = fileIdentifier+(val_match[0].split(":")[0]).split(fileIdentifier).slice(-1)
                                item["loc"] = item["loc"].replace(val_match[0].split(":")[0], filePath)
                                
                                if (!(filenames.includes(filePath))) {
                                        filenames.push(filePath)
                                }
                                if (item["typ"]==="InvokeReturn" && item["ret"]!==null){
                                        item["ret"][0]["retLoc"]= item["ret"][0]["retLoc"].replace(/_orig_/g, '')
                                        var val_match = item["ret"][0]["retLoc"].match(regex)
                                        if(val_match){
                                                var filePath = fileIdentifier+(val_match[0].split(":")[0]).split(fileIdentifier).slice(-1)
                                                item["ret"][0]["retLoc"] = item["ret"][0]["retLoc"].replace(val_match[0].split(":")[0], filePath)
                                                
                                                if (!(filenames.includes(filePath))) {
                                                        filenames.push(filePath)
                                                }
                                        }
                                }
                        }
                }
        }*/
        fs.readdirSync(dir).forEach( f => {
                let readPath = path.join(dir, f);
                let isDirectory = fs.statSync(readPath).isDirectory();
                if (isDirectory){ 
                        readJSFiles(readPath)
                }
              else{
                  //let filePath = fileIdentifier+readPath.split(fileIdentifier).slice(-1)
                  if(readPath.endsWith('.js')){ //&& filenames.includes(filePath)){
                        filenames.push(readPath);
                        //data[filePath] = fs.readFileSync(readPath).toString().split("\n");
                  }
                }
              });
        return data;
}

function flowProcess(Flow,JSfiles) {
        // Getting the inputs from console
        if (process.argv.length == 4) {
                FlowRead = Flow
                inputDir = JSfiles
                main();
                return FlowRead;
        }
        /*else {
                console.log("Please provide arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4.Mteric Type")
        }*/
}
//module.exports = processInputs;
module.exports={
        flowProcess
      }

/*
node experiments/metrics/preprocess.js 
*/