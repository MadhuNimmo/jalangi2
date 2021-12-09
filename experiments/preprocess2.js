var Graph = require('./metrics/Graph.js');
const path = require('path');
var regex = /(?!\()(\S+)\@[0-9]+\:([0-9]+\-[0-9]+)|((\S+)\s(\(Native\)))/;

const fs = require('fs');
var filenames = [];
var data = {};
var filedata = {};
var relevantFiles=new Set();
var appFiles = ["app.js","base.js","todo.js","todoFocus.js","todoEscape.js","todoStorage.js","main.js"]//["app.js","base.js"]//[]
var frmFiles= [];
var dynCallGraphEdit = new Graph();
var statCallGraphEdit = new Graph();
var common = new Graph();
var statCallGraph = {}
var statCallGraph2 = {}


function main() {
        // Identifying the extension of the input files
        DCGextension = DCGFilename.split('.').pop();
        SCGextension = SCGFilename.split('.').pop();
        // Generating the output path
        //finalPath = path.join(outPath, "MsngEdgeStatNative.txt");
        // Identyfing the JS files
        filedata = readJSFiles(inputDir);

        if (DCGextension == "txt") {
                // Formatting text input
                var DCG =fs.readFileSync(DCGFilename).toString().trim().split("\n");
                var dynCallGraph = []
                for (i = 0; i < DCG.length; i++) {
                        dynCallGraph[i] = formatDCG(DCG[i])
                }
                // Converting text to graph
                dynCallGraphEdit = txtToGraph(dynCallGraph)
        }
        else {
                // Formatting json input
                var DCG = JSON.parse(fs.readFileSync(DCGFilename, 'utf8'));
                var dynCallGraph = {}
                for (var key of Object.keys(DCG)) {
                        new_key = formatDCG(key)
                        if(!(new_key in dynCallGraph)){
                        dynCallGraph[new_key] = []}
                        values = DCG[key]
                        for (var val of values) {
                                new_val = formatDCG(val)
                                if(!(new_val in dynCallGraph[new_key])){
                                dynCallGraph[new_key].push(new_val)}
                        }
                }

                // Converting json to graph
                dynCallGraphEdit = jsonToGraph(dynCallGraph);
        }

        if (metricType == "Metric1" || metricType == "EdgeDiff") { //calling loc -> callee
                // Converting json to graph
                var SCG = JSON.parse(fs.readFileSync(SCGFilename, 'utf8'));
                //var statCallGraph = {}
                for (var mkey of Object.keys(SCG)) {
                        if (typeof SCG[mkey] === 'object') {
                                for (var ckey in SCG[mkey]) {
                                        if(formatSCG(ckey)!==null){
                                                var new_key= formatSCG(ckey)
                                                if (!(new_key in statCallGraph)){
                                                statCallGraph[new_key] = []}
                                                values = SCG[mkey][ckey]
                                                for (var val of values) {
                                                        if (formatSCG(val)!==null){
                                                                var new_val= formatSCG(val)
                                                                if(!(new_val in statCallGraph[new_key])){
                                                                statCallGraph[new_key].push(new_val)}
                                                                }
                                                        }
                                                }
                                }
                        }
                }
                statCallGraphEdit = jsonToGraph(statCallGraph);

        }
        else if (metricType == "Metric2") { //enclosing body -> callee
                 // Converting json to graph
                 var SCG = JSON.parse(fs.readFileSync(SCGFilename, 'utf8'));
                //var statCallGraph = {}
                for (var mkey of Object.keys(SCG)) {
                        if (typeof SCG[mkey] === 'object' && formatSCG(mkey)!=null) {
                               var new_key= formatSCG(mkey)
                               if (!(new_key in statCallGraph)){
                                statCallGraph[new_key] = []}
                                for (const ckey in SCG[mkey]) {
                                        if(formatSCG(ckey)!==null){
                                                values = SCG[mkey][ckey]
                                                for (var val of values) {
                                                        if (formatSCG(val)!==null){
                                                               var new_val= formatSCG(val)
                                                               if(!(new_val in statCallGraph[new_key])){
                                                                statCallGraph[new_key].push(new_val)}
                                                        }
                                                        }
                                               }
                                }
                        }
                }
                 statCallGraphEdit = jsonToGraph(statCallGraph);
        }
        else if (metricType == "Metric3") { //as it is
                // Converting json to graph
               
                var SCG = JSON.parse(fs.readFileSync(SCGFilename, 'utf8'));
                //var statCallGraph = {}
                for (var mkey of Object.keys(SCG)) {
                        if (typeof SCG[mkey] === 'object' && formatSCG(mkey)!=null) {
                               var new_mkey= formatSCG(mkey)
                               if (!(new_mkey in statCallGraph)){
                                statCallGraph[new_mkey] = {}}
                                for (const ckey in SCG[mkey]) {
                                        if(formatSCG(ckey)!==null){
                                               var new_ckey= formatSCG(ckey)
                                               if (!(new_ckey in statCallGraph[new_mkey])){
                                                       statCallGraph[new_mkey][new_ckey] = []}
                                                values = SCG[mkey][ckey]
                                                for (var val of values) {
                                                        if (formatSCG(val)!==null){
                                                               var new_val= formatSCG(val)
                                                               if(!(new_val in statCallGraph[new_mkey][new_ckey])){
                                                                statCallGraph[new_mkey][new_ckey].push(new_val)}
                                                                }
                                                        }
                                               }
                                }
                        }
                }
                for (var mkey of Object.keys(SCG)) {
                        if (typeof SCG[mkey] === 'object' && formatSCG(mkey)!=null) {
                               var new_key= formatSCG(mkey)
                               if (!(new_key in statCallGraph2)){
                                statCallGraph2[new_key] = []}
                                for (const ckey in SCG[mkey]) {
                                        if(formatSCG(ckey)!==null){
                                                values = SCG[mkey][ckey]
                                                for (var val of values) {
                                                        if (formatSCG(val)!==null){
                                                               var new_val= formatSCG(val)
                                                               if(!(new_val in statCallGraph2[new_key])){
                                                                statCallGraph2[new_key].push(new_val)}
                                                        }
                                                        }
                                               }
                                }
                        }
                }
                //console.log(statCallGraph2)
                statCallGraphEdit = jsonToGraph(statCallGraph2);
       }
       
        relevantFiles.forEach(v => {if(!appFiles.includes(v)){frmFiles.push(v)}});
        
        /*var dynPath=path.join(outPath, "DynCallGraphEdit3.txt")
        fs.writeFile(dynPath,dynCallGraphEdit.getGraph(),function(err) {
                if(err) console.log('error', err);
        });

        var statPath=path.join(outPath, "StatCallGraphEdit3.txt")
        fs.writeFile(statPath,statCallGraphEdit.getGraph(),function(err) {
                if(err) console.log('error', err);
        });*/
}

function formatSCG(input) {
        regex_pattern = [...input.matchAll(/((\S+)\@([0-9]+\:[0-9]+\-[0-9]+))/g)];
        /*if (input.startsWith("index.html")){
                console.log("here",regex_pattern[0][1].split("@")[0])

        }*/
        for (j = 0; j < regex_pattern.length; j++) {
                if ((regex_pattern[j][1].split("@")[0]).includes(".html")){
                        lineInfo = regex_pattern[j][1].split("@")[0]
                        //input = "system (Native)"
                }
                else if (!(relevantFiles.has(regex_pattern[j][1].split("@")[0]))) {

                        return null
                }
                else{
                inpJSFile = filedata[regex_pattern[j][1].split("@")[0]]
                if (regex_pattern[j][1] == 'undefined') {
                        continue;
                }
                else {
                        lineInfo = regex_pattern[j][1].split("@")[1];
                }

                try {
                        input = input.replace(lineInfo, lineSpaces(lineInfo.split(":")[1], inpJSFile)+":"+lineInfo.split(":")[1]);
                }
                catch (e) {
                        continue;
                }
                }
        }
        return input;
}
function formatDCG(input) {
        //output = ""
        // Removing unnecessary information 
        input = input.replace(/_orig_/g, '')
        // Replacing the Row-Column format to Character-Spaces format
        regex_pattern = [...input.matchAll(/((\S+)\@([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+))/g)];
        for (j = 0; j < regex_pattern.length; j++) {
                //console.log(regex_pattern[j][1].split("@")[0])
                if (filenames.includes(regex_pattern[j][1].split("@")[0])) {
                        inpJSFile = filedata[regex_pattern[j][1].split("@")[0]]
                        relevantFiles.add(regex_pattern[j][1].split("@")[0])
                }
                else {
                        continue;
                }
                if (regex_pattern[j][1] == 'undefined') {
                        continue;
                }
                else {
                        lineInfo = regex_pattern[j][1].split("@")[1];
                }

                try {   //console.log(lineInfo,lineInfo.split(":")[0])
                        input = input.replace(lineInfo, lineInfo.split(":")[0] + ":" + (charSpaces(lineInfo, inpJSFile).join("-")));
                }
                catch (e) {
                        continue;
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
function lineSpaces(chars, inpJSFile) {
        // Calculating the char spaces occupied by a line
        var cnt = 0;
        startend = chars.split("-")
        for (var j = 0; j < inpJSFile.length; j++) {
                cnt += inpJSFile[j].length + 1;
                if(startend[0]<cnt)
                {
                        return j+1;
                }
        }
        return j;
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
                let dirPath = path.join(dir, f);
                let isDirectory = fs.statSync(dirPath).isDirectory();
                if (isDirectory){ 
                        readJSFiles(dirPath)
                }
              else{
                  if(f.endsWith('.js')){
                  var filePath = path.join(dir, f);
                  filenames.push(f);
                  data[f] = fs.readFileSync(filePath).toString().split("\n");
                  }
                }
              });
        return data;
}
function jsonToGraph(input) {
        // Converting a json input to Graph 
        output = new Graph();
        //if(metricType!="Metric3"){
                for (var idx in input) {
                                var item = input[idx];
                                for (var key in item) {
                                        //console.log(idx,item[key])
                                        output.addEdge(idx, item[key]);
                                }
                }
        //}
        /*else if(metricType=="Metric3"){
                for (var idx in input) {
                        var item = input[idx];
                        //for (var key in item) {
                                console.log(idx,item)
                                output.addEdge(idx, item);
                        //}
        }

        }*/
        /*for (var idx of Object.keys(input)) {
                for (var key in input[idx]) {
                        output.addEdge(idx, input[idx][key]);
                }
        }*/
        return output
}
function txtToGraph(input) {
        // Converting a text input to Graph 
        output = new Graph();
        for (var element in input) {
                [caller, callee] = input[element].split(" -> ");
                output.addEdge(caller, callee);
        }
        return output
}
function processInputs(DCG,SCG,JSfiles,metric ) {
        // Getting the inputs from console
        if (process.argv.length == 6) {
                DCGFilename = DCG//process.argv[2]
                SCGFilename = SCG//process.argv[3]
                inputDir = JSfiles//(process.argv[4]).toString();
                //outPath = process.argv[5];
                metricType = metric;
                main();
                //console.log(dynCallGraphEdit.getSize())
                if(metricType=="Metric3"){
                        return [dynCallGraphEdit,statCallGraphEdit,statCallGraph,appFiles,frmFiles];
               
                }else{
                        return [dynCallGraphEdit,statCallGraphEdit,appFiles,frmFiles];
                }
        }
        else {
                console.log("Please provide arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4.Mteric Type")
        }
}
//module.exports = processInputs;
module.exports={
        processInputs
      }

/*
node experiments/metrics/preprocess.js 
*/