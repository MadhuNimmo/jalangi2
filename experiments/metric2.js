var Graph = require('./Graph.js');
const clonedeep = require('lodash.clonedeep')
const path = require('path');
var regex = /(?!\()(\S+)\@[0-9]+\:([0-9]+\-[0-9]+)|(\'(\S+)\'\s(\(Native\)))/;
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
//var commonReach = {};
var DCGmodified = new Graph();

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
                        dynCallGraph[new_key] = []
                        values = DCG[key]
                        for (var val of values) {
                                new_val = formatDCG(val)
                                dynCallGraph[new_key].push(new_val)
                        }
                }

                // Converting json to graph
                dynCallGraphEdit = jsonToGraph(dynCallGraph);
        }
        if (SCGextension == "txt") {//doesnot work || dcg filtering not yet implemented
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
                        if (typeof SCG[mkey] === 'object' && formatSCG(mkey)) {
                                statCallGraph[mkey] = []
                                for (const ckey in SCG[mkey]) {
                                        if(formatSCG(ckey)){
                                                values = SCG[mkey][ckey]
                                                for (var val of values) {
                                                        if (formatSCG(val)){
                                                                statCallGraph[mkey].push(val)
                                                                }
                                                        }
                                                }
                                }
                        }
                }
                //console.log(statCallGraph)
                statCallGraphEdit = jsonToGraph(statCallGraph);

        }
        //statCallGraphEdit = filter(dynCallGraphEdit,statCallGraphEdit)
        //console.log(dynCallGraphEdit.getContains("'call' (Native)"));

        relevantFiles.forEach(v => {if(!appFiles.includes(v)){appFiles.push(v)}});
        //console.log(dynCallGraphEdit.getSize(),statCallGraphEdit.getSize())

        DCGmodified = computeDCGMethodReachability(dynCallGraphEdit)
        //DCGmodified.getbfs("'global' (exampleNestCall.js@1:0-145)");
        //statCallGraphEdit.getbfs("exampleNestCall.js@1:0-145");
        //statCallGraphEdit.getbfs("view.js@186:4869-4927")
        //console.log(DCGmodified.getbfs('system (Native)'));
        getTypeMetric();
        //console.log(computeSCGMethodReachability(statCallGraphEdit));
        
        
        //intermediate edited dynamic call graph
        /*var dynPath=path.join(outPath, "DynCallGraphEdit.txt")
        fs.writeFile(dynPath,dynCallGraphEdit.getGraph(),function(err) {
                if(err) console.log('error', err);
        });*/
        //intermediate edited static call graph
        /*var statPath=path.join(outPath, "StatCallGraphE.txt")
        fs.writeFile(statPath,statCallGraphEdit.getGraph(),function(err) {
                if(err) console.log('error', err);
        });*/
        
        // Generating the common nodes between the Dynamic and Satic Call Graph
        
        //getTypeMetric()
        /*fs.writeFile(finalPath, indynamic.getGraph(), function (err) {
                if (err) {
                        console.log(err);
                } else {
                        console.log("The dynamic call edges missing from static call graph is saved in: " + finalPath);
                }
        });*/
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
function computeDCGMethodReachability(dynCallGraphEdit){
        var DCGadjGraph ={};
        var output = clonedeep(dynCallGraphEdit)
        DCG_keys = [...dynCallGraphEdit.getKeys()]
        for (DCG_key of DCG_keys){
                var DCG_values = dynCallGraphEdit.getValues(DCG_key);
                        for (DCG_value of DCG_values){
                                DCGadjGraph[DCG_value]=[]
                                var containList = dynCallGraphEdit.getContains(DCG_value);
                                for(var k of containList){
                                        if (!(DCGadjGraph[DCG_value].includes(k))){
                                                DCGadjGraph[DCG_value].push(k)}
                                }

                        }
                
        }
        
        for (DCG_key of DCG_keys){
                for(adjkey of Object.keys(DCGadjGraph)){
                        if(DCGadjGraph[adjkey].includes(DCG_key)){
                                var DCG_values = dynCallGraphEdit.getValues(DCG_key);
                                for (DCG_value of DCG_values){ 
                                        output.addEdge(adjkey,DCG_value)
                                        output.removeEdge(DCG_key,DCG_value)
                                }
                        }
                }
                
                
        } 
        return output;


}

function getStaticCallGraphNodes(input) {
        //item_keys = [...statCallGraphEdit.getKeys()]
        var output=[]
        //input_keys = [...DCGmodified.getValues(input)]
        //for (input_key of input_keys){
        //console.log([...DCGmodified.getbfs("'anon' (view.js@173:4515-5587")].length)
        //console.log(input)
                reg_key=regex.exec(input)
                regex.lastIndex = 0;
                DCGkey_pattern =  reg_key == null?null: reg_key.slice(1, 3).every(element => element != undefined) ? reg_key.slice(1, 3):reg_key.slice(4, 6).every(element => element != undefined)?reg_key.slice(4, 6):null
                if (DCGkey_pattern !== null) {
                        for (SCG_key of statCallGraphEdit.getKeys()) {
                                if (DCGkey_pattern.every(pattern => SCG_key.toString().includes(pattern))) {
                                                //console.log(SCG_key,statCallGraphEdit.getbfs(SCG_key).length)
                                                for(bfsitem of statCallGraphEdit.getbfs(SCG_key)){
                                                        if (!(output.includes(bfsitem))){
                                                                output.push(bfsitem)
                                                        }
                                                }
                                        }
                                }
                        }
        //}
        return output;
}
function nodeType(input) {
        var type = "";
        if(appFiles.some(function(v) { return input.indexOf(v) >= 0; })){
                        type="app";
        }
        else if(frmFiles.some(function(v) { return input.indexOf(v) >= 0; })){
                        type="frm";
        }
        /*else if(input=="'system' (Native)"){//input.includes("'global'")
                type="sys"
        }*/
        else{
                type="none"
        }
        return type;
}
function comReach(list1,list2){
        output=[]
        for(item1 of list1){
                for(item2 of list2){
                        /*if(item1==item2 && output.includes(item1)){
                                output.push(item1)
                        }*/
                        item_reg=regex.exec(item1)
                        regex.lastIndex = 0;
                        
                        item_pattern =  item_reg == null?null: item_reg.slice(1, 3).every(element => element != undefined) ? item_reg.slice(1, 3):item_reg.slice(4, 6).every(element => element != undefined)?item_reg.slice(4, 6):null
                        //console.log(item1,item_pattern,item2,item_pattern.every(pattern => item2.toString().includes(pattern)))
                        if(item_pattern!=null){
                                if (item_pattern!=null && item_pattern.every(pattern => item2.toString().includes(pattern))){
                                        if(!output.includes(item1)){
                                                output.push(item1)}
                                }

                        }
                }
        }
        //console.log(list1,list2,output)
        return output;
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
                //keys = [...DCGmodified.getKeys()]//getvalues for system
                keys= [...DCGmodified.getValues("'system' (Native)")]
                //console.log(keys)
                for (var key of keys) { //loop thru values
                        //console.log(key,nodeType(key))
                                if(nodeType(key)!="none"){
                                        //console.log("here")
                                        key_cnt+=1;
                                        var DCG_nodes = DCGmodified.getbfs(key);
                                        var SCG_nodes = getStaticCallGraphNodes(key);
                                        var Comm_nodes = comReach(DCG_nodes,SCG_nodes)//getValues(key) == undefined? 0 : [...commonCallSite.getValues(key)].length;
                                        tot_precision+= (Comm_nodes.length == 0 ? 0: Comm_nodes.length/SCG_nodes.length);
                                        tot_recall+= (Comm_nodes.length == 0? 0: Comm_nodes.length/DCG_nodes.length);
                                        /*if(Comm_nodes.length>DCG_nodes.length){
                                                console.log(key)
                                                console.log(DCG_nodes)
                                                console.log(SCG_nodes(key))
                                                console.log(Comm_nodes)
                                        }*/
                                        //console.log(key,DCG_nodes.length,SCG_nodes.length,Comm_nodes.length)
                                                //DCG_values,precision,recall)
                                        if(nodeType(key)=="app"){
                                                app_cnt+=1;
                                                app_precision+= (Comm_nodes.length == 0 ? 0: Comm_nodes.length/SCG_nodes.length);
                                                app_recall+= (Comm_nodes.length == 0? 0: Comm_nodes.length/DCG_nodes.length);
                                        }
                                        else if(nodeType(key)=="frm"){
                                                frm_cnt+=1;
                                                frm_precision+= (Comm_nodes.length == 0 ? 0: Comm_nodes.length/SCG_nodes.length);
                                                frm_recall+= (Comm_nodes.length == 0? 0: Comm_nodes.length/DCG_nodes.length);
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