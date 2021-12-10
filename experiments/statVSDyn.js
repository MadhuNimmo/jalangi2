var Graph = require('./Graph.js');
const path = require('path');
var regex = /\((\S)+\@[0-9]+\:[0-9]+\-[0-9]+\)|\((Native)\)/g;
const fs = require('fs');
var filenames = [];
var data = {};
var caller, callee;
var filedata = {};
var relevantFiles=new Set();


function main() {
        // Identifying the extension of the input files
        DCGextension = DCGFilename.split('.').pop();
        SCGextension = SCGFilename.split('.').pop();
        // Generating the output path
        finalPath = path.join(outPath, "MsngEdgeStat.txt");
        // Identyfing the JS files
        filedata = readJSFiles(inputDir);

        if (DCGextension == "txt") {
                // Formatting text input
                var DCG = fs.readFileSync(DCGFilename).toString().split("\n");
                var dynCallGraph = []
                for (i = 0; i < DCG.length; i++) {
                        dynCallGraph[i] = formatDCG(DCG[i])
                }
                // Converting text to graph
                var dynCallGraphEdit = txtToGraph(dynCallGraph)
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
                var dynCallGraphEdit = jsonToGraph(dynCallGraph);
        }
        if (SCGextension == "txt") {
                // Converting text to graph
                var SCG = fs.readFileSync(SCGFilename).toString().trim().split("\n");
                var statCallGraph = []
                for (i = 0; i < SCG.length; i++) {
                        if(formatSCG(SCG[i])){
                                statCallGraph.push(SCG[i])
                        }
                }
                var statCallGraphEdit = txtToGraph(statCallGraph)

        }
        else {
                // Converting json to graph
                var SCG = JSON.parse(fs.readFileSync(SCGFilename, 'utf8'));
                var statCallGraph = {}
                for (var key of Object.keys(SCG)) {
                        if(formatSCG(key)){
                                statCallGraph[key] = []
                                values = SCG[key]
                                for (var val of values) {
                                        if (formatSCG(val)){
                                                statCallGraph[key].push(val)
                                        }
                                }
                        }
                }
                var statCallGraphEdit = jsonToGraph(SCG);
        }

        //intermediate edited dynamic call graph
        /*var dynPath=path.join(outPath, "DynCallGraphEdit.txt")
        fs.writeFile(dynPath,dynCallGraphEdit.getGraph(),function(err) {
                if(err) console.log('error', err);
        });*/
        //intermediate edited static call graph
        /*var statPath=path.join(outPath, "StatCallGraphEdit.txt")
        fs.writeFile(statPath,statCallGraphEdit.getGraph(),function(err) {
                if(err) console.log('error', err);
        });*/
        // Generating the differences between the Dynamic and Satic Call Graph
        var indynamic = new Graph();
        indynamic = difference(dynCallGraphEdit, statCallGraphEdit)

        // Writing the edges missing in the Satic Call Graph to the output file
        fs.writeFile(finalPath, indynamic.getGraph(), function (err) {
                if (err) {
                        console.log(err);
                } else {
                        console.log("The dynamic call edges missing from static call graph is saved in: " + finalPath);
                }
        });
}

function difference(item1, item2) {
        // Identifying the edges of Dynamic Call Graph that are missing in Static Call Graph
        var diffs = new Graph();
        item1_keys = item1.getKeys()

        for (var key of item1_keys) {
                var values = item1.getValues(key);
                for (var value of values) {
                        if (!item2.hasEdge(key, value)) {
                                diffs.addEdge(key, value)
                        }
                }
        }
        diffs = common(diffs, item2)
        return diffs

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
                        continue
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

function common(diffs, items) {
        // Removing the mismatched edges caused by function-name mismatch only
        var output = Object.assign(new Graph(), diffs);
        diff_keys = [...diffs.getKeys()]
        item_keys = [...items.getKeys()]
        for (var diff_key of diff_keys) {
                diffkey_pattern = diff_key.match(regex) != null ? diff_key.match(regex)[0] : null
                var values = diffs.getValues(diff_key);
                for (var value of values) {
                        diffval_pattern = value.match(regex) != null ? value.match(regex)[0] : null
                        if (diffkey_pattern != null && diffval_pattern != null) {
                                item_value = "";
                                for (key of items.getKeys()) {
                                        if (key.toString().includes(diffkey_pattern)) {
                                                for (val of items.getValues(key)) {
                                                        if (val.toString().includes(diffval_pattern)) {
                                                                diffs.removeEdge(diff_key, value)
                                                                break;
                                                        }
                                                }
                                        }
                                }
                        }
                }

        }
        return diffs;
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
node experiments/statVSDyn.js /home/anon/js-acg-examples-master/Knockout_test_results/response.json /home/anon/js-acg-examples-master/Knockout_test_results/StatRes_knockrev.txt /home/anon/js-acg-examples-master/knockout_rev/ /home/anon/js-acg-examples-master/Knockout_test_results/
*/