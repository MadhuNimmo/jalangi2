var Graph = require('./Graph.js');
const path = require('path');
var regex = /(?!\[)((\S+)\@([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+))/gi
var hrefRegex =  /href\=\"\S*\(/gi

const fs = require('fs');
var filenames = [];
var data = {};
var fileData = {};
var FlowRead= [];
var fileParentDir =""
function main(typ) {
        readJSFiles(inputDir);
        fileParentDir = path.dirname(inputDir)
        // Formatting json input
        if(typ==="funTrace"){
                for (var item of FlowRead) {
                                if (item["typ"]=== "LexRead"){
                                                item["loc"] = formatFlowRead(item["loc"],true)
                                                item["eloc"] = formatFlowRead(item["eloc"],false)
                                }
                                else {
                                        
                                        item["loc"] = formatFlowRead(item["loc"],false)
                                        if(item["typ"]==="InvokeReturn" && item["ret"]!==null){
                                                item["ret"][0]["retLoc"] = formatFlowRead(item["ret"][0]["retLoc"],false)
                                        }
                                        if(item["typ"]==="LocRead"){
                                                item["eloc"] = formatFlowRead(item["eloc"],false)
                                        }
                                }
                }
        }
        return FlowRead
}

function formatFlowRead(input,lexRead) {
        // Replacing the Row-Column format to Character-Spaces format
        input = input.replace(/_orig_/g, '')
        if(input.includes("href=\"javascript:iidToDisplayCodeLocation:")){
                input = input.replace(hrefRegex,"")
        }
        regex_pattern = regex.exec(input);
        regex.lastIndex=0;
        if(regex_pattern!==null){
                var filePath = ""
                // To process eval/evalIndirect
                var evalString=""
                var ifEval = regex_pattern[2].startsWith("evalIndirect:") || regex_pattern[2].startsWith("eval:")
                if(ifEval){
                        evalString=regex_pattern[2].split(":")[0]+":"
                        regex_pattern[2]=regex_pattern[2].split(":")[1]
                }
                if(path.dirname(regex_pattern[2]).split(path.sep)[1]==="tmp"){
                        var intpath = regex_pattern[2].split(path.sep).slice(2).join(path.sep)
                        var fileName = path.join(fileParentDir,intpath);
                        filePath = fileName
                
                }else if(path.dirname(regex_pattern[2]).split(path.sep)[0]==="cache"){
                        var intpath = regex_pattern[2]//.split(path.sep).slice(2).join(path.sep)
                        var fileName = path.join(fileParentDir,intpath);
                        filePath = fileName
                
                }else{
                        fileName=regex_pattern[2]
                        filePath=regex_pattern[2]
                }
                var fileLoc = regex_pattern[3];
                if(filenames.includes(fileName)){  
                        if (!fileData[fileName]){              
                                fileData[fileName] = fs.readFileSync(filePath).toString().split("\n");
                        }
                        var inpJSFile = fileData[fileName]
                        try{
                                        if (lexRead){
                                                var indx= charSpaces(fileLoc, inpJSFile).slice(0,1).toString()
                                                if(indx==="0"){
                                                        input = input.replace(regex_pattern[1],evalString+fileName)
                                                }else{
                                                        input = input.replace(regex_pattern[1],evalString+fileName+"@"+indx)
                                                }

                                        }else{
                                                input = evalString+fileName+"@"+fileLoc.split(":")[0] + ":" + (charSpaces(fileLoc, inpJSFile).join("-"))
                                        }
                        }
                        catch(e){
                                console.log("Formatting issues :" + input)
                        }
                }else{

                        input = evalString+fileName
                }
        }else{
                //new to solve mithril app/app.js issue
                if(input.startsWith("/tmp/") && input.endsWith(".js")){
                        input = input.replace("/tmp",fileParentDir)
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
        fs.readdirSync(dir).forEach( f => {
                let readPath = path.join(dir, f);
                let isDirectory = fs.statSync(readPath).isDirectory();
                if (isDirectory){ 
                        readJSFiles(readPath)
                }
              else{
                  if(readPath.endsWith('.js')){
                        filenames.push(readPath);
                  }
                }
              });
        return data;
}

function flowProcess(Flow,JSfiles,typ = "funTrace") {
        // Getting the inputs 
                FlowRead = Flow
                inputDir = JSfiles
                main(typ);
                return FlowRead;
}
module.exports={
        flowProcess
      }
