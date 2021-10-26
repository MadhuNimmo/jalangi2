var Graph = require('./Graph.js');
//const clonedeep = require('lodash.clonedeep')
const path = require('path');
//var regex = /(?!\()(\S+)\@[0-9]+\:([0-9]+\-[0-9]+)|((\S+)\s(\(Native\)))/;
var regex = /(?!\()(\S+)\@[0-9]+\:([0-9]+\-[0-9]+)|(\'(\S+)\'\s(\(Native\)))/;
//var xxxxx = /(?!\()(\S+)\@[0-9]+\:([0-9]+\-[0-9]+)|((\S+)\s(\(Native\)))/;

const fs = require('fs');
var filenames = [];
var data = {};
var caller, callee;
var filedata = {};
var relevantFiles=new Set();
var appFiles = []//["app.js","base.js"]//["inline-0.js","inline-1.js"]
var edgeTypes={}
var frmFiles= [];
var dynCallGraphEdit = new Graph();
var statCallGraphEdit = new Graph();
var commonCallSite = new Graph();

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
                        new_key = formatDCG(key,"key")
                        dynCallGraph[new_key] = []
                        values = DCG[key]
                        for (var val of values) {
                                new_val = formatDCG(val,"val")
                                dynCallGraph[new_key].push(new_val)
                        }
                }

                // Converting json to graph
                dynCallGraphEdit = jsonToGraph(dynCallGraph);
        }
        if (SCGextension == "txt") {//need to check
                // Converting text to graph
                var SCG = fs.readFileSync(SCGFilename).toString().trim().split("\n");
                var statCallGraph = []
                for (i = 0; i < SCG.length; i++) {
                        if(formatSCG(SCG[i])){
                                statCallGraph.push(SCG[i])
                        }
                }
                statCallGraphEdit = txtToGraph(statCallGraph)

        }
        else {
                // Converting json to graph
                var SCG = JSON.parse(fs.readFileSync(SCGFilename, 'utf8'));
                var statCallGraph = {}
                for (var mkey of Object.keys(SCG)) {
                        if (typeof SCG[mkey] === 'object') {
                                for (var ckey in SCG[mkey]) {
                                        if(formatSCG(ckey)){
                                                statCallGraph[ckey] = []
                                                values = SCG[mkey][ckey]
                                                for (var val of values) {
                                                        if (formatSCG(val)){
                                                                statCallGraph[ckey].push(val)
                                                                }
                                                        }
                                                }
                                }
                        }
                }
                //console.log(statCallGraph)
                statCallGraphEdit = jsonToGraph(statCallGraph);

        }
        //filtering edges with common call site
        //console.log(dynCallGraphEdit)
        //console.log
        statCallGraphEdit = filter(dynCallGraphEdit,statCallGraphEdit)
        relevantFiles.forEach(v => {if(!appFiles.includes(v)){appFiles.push(v)}});
        //intermediate edited dynamic call graph
        var dynPath=path.join(outPath, "DynCallGraphEdit2.txt")
        fs.writeFile(dynPath,dynCallGraphEdit.getGraph(),function(err) {
                if(err) console.log('error', err);
        });
        //intermediate edited static call graph
        var statPath=path.join(outPath, "StatCallGraphEdit2.txt")
        fs.writeFile(statPath,statCallGraphEdit.getGraph(),function(err) {
                if(err) console.log('error', err);
        });
        
        getTypeMetric()
}

function formatSCG(input) {
        regex_pattern = [...input.matchAll(/\(((\S+)\@([0-9]+\:[0-9]+\-[0-9]+))\)/g)];
        for (j = 0; j < regex_pattern.length; j++) {
                if (!(relevantFiles.has(regex_pattern[j][1].split("@")[0]))) {
                        return false
                }
        }
        return true;
}
function formatDCG(input) {
        output = ""
        // Removing unnecessary information 
        input = input.replace(/_orig_/g, '').replace(/(\S)+\.html\:[0-9]+\s/g, '');
        // Replacing the Row-Column format to Character-Spaces format
        regex_pattern = [...input.matchAll(/\(((\S+)\@([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+))\)/g)];
        for (j = 0; j < regex_pattern.length; j++) {
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

                try {
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
function filter(DCG_items, SCG_items) {

        // Removing the edges with no common call site from SCG and identifying common edges between DCG and SCG
        var output = new Graph();;
        DCG_keys = [...DCG_items.getKeys()]
        item_keys = [...SCG_items.getKeys()]

        for (var DCG_key of DCG_keys) {
                reg_key=regex.exec(DCG_key)
                regex.lastIndex = 0;
                DCGkey_pattern =  reg_key == null?null: reg_key.slice(1, 3).every(element => element != undefined) ? reg_key.slice(1, 3):null
                var DCG_values = DCG_items.getValues(DCG_key);
                for (DCG_value of DCG_values) {
                        reg_val=regex.exec(DCG_value)
                        regex.lastIndex = 0;
                        DCGval_pattern = reg_val ==null ? null : reg_val.slice(1, 3).every(element => element != undefined) ?reg_val.slice(1, 3):reg_val.slice(4, 6).every(element => element != undefined)?reg_val.slice(4, 6):null
                        regex.lastIndex = 0;
                        if (DCGkey_pattern !== null && DCGval_pattern !== null) {
                                for (SCG_key of SCG_items.getKeys()) {
                                        if (DCGkey_pattern.every(pattern => SCG_key.toString().includes(pattern))) {
                                                for (SCG_value of SCG_items.getValues(SCG_key)) {
                                                        output.addEdge(SCG_key, SCG_value);
                                                        if (DCGval_pattern.every(pattern => SCG_value.toString().includes(pattern))){
                                                                commonCallSite.addEdge(DCG_key, DCG_value);
                                                        }
                                                }
                                        }
                                        
                                }
                        }
                }

        }
        //console.log(DCG_items)
        //console.log(output)
        return output;
}

function getStaticCallGraphEdges(input_key) {
        item_keys = [...statCallGraphEdit.getKeys()]
        var out=[]
        reg_key=regex.exec(input_key)
        regex.lastIndex = 0;
        DCGkey_pattern =  reg_key == null?null: reg_key.slice(1, 3).every(element => element != undefined) ? reg_key.slice(1, 3):reg_key.slice(4, 6).every(element => element != undefined)?reg_key.slice(4, 6):null
        if (DCGkey_pattern !== null) {
                for (SCG_key of statCallGraphEdit.getKeys()) {
                        if (DCGkey_pattern.every(pattern => SCG_key.toString().includes(pattern))) {
                                var vals= [...statCallGraphEdit.getValues(SCG_key)]
                                out.push(...vals)
                                }
                        }
                }
        
        return out;
}
function edgeType(callSite) {
        var type = "";
        if(appFiles.some(function(v) { return callSite.indexOf(v) >= 0; })){
                        type="app";
        }
        else if(frmFiles.some(function(v) { return callSite.indexOf(v) >= 0; })){
                        type="frm";
        }
        else{
                type="none"
        }
        return type;
}
function getTypeMetric() {

        var tot_precision=0;
        var tot_recall=0;
        //var types=["total","application","framework"]
        var app_precision=0;
        var app_recall = 0;
        var frm_precision=0;
        var frm_recall=0;

        var key_cnt=0;
        var app_cnt=0;
        var frm_cnt=0;
                keys = [...dynCallGraphEdit.getKeys()]
                for (var key of keys) {
                                if(edgeType(key)!=="none"){
                                        key_cnt+=1;
                                        var DCG_values = [...dynCallGraphEdit.getValues(key)].length;
                                        var SCG_values = (getStaticCallGraphEdges(key)).length;
                                        var Comm_values = commonCallSite.getValues(key) == undefined? 0 : [...commonCallSite.getValues(key)].length;
                                        tot_precision+= (Comm_values == 0 ? 0: Comm_values/SCG_values);
                                        tot_recall+= (Comm_values == 0? 0: Comm_values/DCG_values);
                                        //console.log(key,DCG_values,SCG_values,Comm_values)
                                        //console.log(key,(Comm_values == 0 ? 0: Comm_values/SCG_values),tot_precision)
                                        //console.log(key,SCG_values,DCG_values)
                                        if(edgeType(key)=="app"){
                                                app_cnt+=1;
                                                app_precision+= (Comm_values == 0 ? 0: Comm_values/SCG_values);
                                                app_recall+= (Comm_values == 0? 0: Comm_values/DCG_values);
                                        }
                                        else if(edgeType(key)=="frm"){
                                                frm_cnt+=1;
                                                frm_precision+= (Comm_values == 0 ? 0: Comm_values/SCG_values);
                                                frm_recall+= (Comm_values == 0? 0: Comm_values/DCG_values);
                                        }
                                }
                        
                }
                var tot_avg_precision=(tot_precision/key_cnt).toFixed(4)
                var tot_avg_recall=(tot_recall/key_cnt).toFixed(4)
                var app_avg_precision=(app_precision/app_cnt).toFixed(4)
                var app_avg_recall=(app_recall/app_cnt).toFixed(4)
                var frm_avg_precision=(frm_precision/frm_cnt).toFixed(4)
                var frm_avg_recall=(frm_recall/frm_cnt).toFixed(4)
                console.log("total"," - ","precision : ",tot_avg_precision,"recall : ",tot_avg_recall)
                console.log("application"," - ","precision : ",app_avg_precision,"recall : ",app_avg_recall)
                console.log("framework"," - ","precision : ",frm_avg_precision,"recall : ",frm_avg_recall)
                //console.log(key_cnt,app_cnt,frm_cnt)
                //console.log(tot_precision,app_precision,frm_precision)


        //}
        //return edgeTypes[type]={"application":appcnt,"intermediary":intcnt,"framework":frmcnt,"total":(appcnt+intcnt+frmcnt)}
}
function jsonToGraph(input) {
        // Converting a json input to Graph 
        output = new Graph();
        for (var idx in input) {
                        var item = input[idx];
                        for (var key in item) {
                                output.addEdge(idx, item[key]);
                        }
        }
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
function getTypeoOfEdges(input,type) {
        // Converting a text input to Graph 
        var appcnt = 0;
        var intcnt =0;
        var frmcnt=0;
        keys = [...input.getKeys()]
        for (var key of keys) {
                var values = input.getValues(key);
                for (value of values) {
                        if(appFiles.some(function(v) { return key.indexOf(v) >= 0; })){
                                if (appFiles.some(function(v) { return value.indexOf(v) >= 0; }) || value.indexOf("(Native)")>=0){
                                        appcnt+=1
                                }
                                else if(frmFiles.some(function(v) { return value.indexOf(v) >= 0; })){
                                        intcnt+=1
                                }
                        }
                        else if (key.indexOf("(Native)")>=0){
                                if (appFiles.some(function(v) { return value.indexOf(v) >= 0; })){
                                        appcnt+=1;
                                }
                                else if (frmFiles.some(function(v) { return value.indexOf(v) >= 0; })){
                                        frmcnt+=1;
                                }
                        }
                        else if (frmFiles.some(function(v) { return key.indexOf(v) >= 0; })){
                                if (appFiles.some(function(v) { return value.indexOf(v)>=0; })){
                                        intcnt+=1;
                                }
                                else if (frmFiles.some(function(v) { return value.indexOf(v) >= 0; }) || value.indexOf("(Native)")>=0){
                                        frmcnt+=1;
                                }

                        }
                        }
        }
        return edgeTypes[type]={"application":appcnt,"intermediary":intcnt,"framework":frmcnt,"total":(appcnt+intcnt+frmcnt)}
}
function getInputs() {
        // Getting the inputs from console
        if (process.argv.length == 6) {
                DCGFilename = process.argv[2]
                SCGFilename = process.argv[3]
                inputDir = (process.argv[4]).toString();
                outPath = process.argv[5];
                main();
        }
        else {
                console.log("Please enter arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4:Output Directory")
        }
}

getInputs()


/*
node experiments/statVSDyn.js /Users/madhurimachakraborty/Documents/js-acg-examples-master/Knockout_test_results/response.json /Users/madhurimachakraborty/Documents/js-acg-examples-master/Knockout_test_results/StatRes_knockrev.txt /Users/madhurimachakraborty/Documents/js-acg-examples-master/knockout_rev/ /Users/madhurimachakraborty/Documents/js-acg-examples-master/Knockout_test_results/
*/