var {processInputs} = require('./preprocess2.js');
var Graph = require('./Graph.js');
const path = require('path');
const clonedeep = require('lodash.clonedeep')


const fs = require('fs');
/*var filenames = [];
var data = {};
var caller, callee;
var filedata = {};*/
//var relevantFiles=new Set();
var DCG=new Graph();
var SCG=new Graph();
var patterns ={}
//var commonCallSite = new Graph();

function main() {
        [DCG, SCG,patterns] = processInputs(DCGFilename,SCGFilename,inputDir,"EdgeDiff");
        getEdgeDiff()
}

function getEdgeDiff() {
    // Identifying common edges between DCG and SCG
    DCG_keys = [...DCG.getKeys()]
    SCG_keys = [...SCG.getKeys()]
    //console.log(DCG,SCG)
    var Mis_edges = clonedeep(DCG)

    for (var DCG_key of DCG_keys) {
            var DCG_values = DCG.getValues(DCG_key);
            for (DCG_value of DCG_values) {
                            for (SCG_key of SCG_keys) {
                                    if (DCG_key===SCG_key || SCG_key.includes(DCG_key)) {
                                            for (SCG_value of SCG.getValues(SCG_key)) {
                                                    if (DCG_value==SCG_value || SCG_value.includes(DCG_value)){
                                                                Mis_edges.removeEdge(DCG_key,DCG_value)
                                                    }
                                            }
                                    }
                                    
                            }
            }

    }
  //Writing the output to a file
  //console.log(Mis_edges.getSize())
  //console.log(patterns)
  var callees = new Set()
  var uneditCallees = new Set()
  var DCGcalleeCallerMap = new Object()
  var flag =true
  var reg = /\[(.*)\]/gi
  var reg2 = /\((.*)\)/gi
  for(var key of Mis_edges.getKeys()){
        var values = Mis_edges.getValues(key);
        for (var value of values) {
                flag=true
                uneditCallees.add(value)
                //changed for JuiceShop
                callees.add(value)
                if(!(value in Object.keys(DCGcalleeCallerMap))){
                        DCGcalleeCallerMap[value] = []
                }
                DCGcalleeCallerMap[value].push(key)
                /*if(value.endsWith("(Native)")){
                        callees.add(value)
                        if(!(value in Object.keys(DCGcalleeCallerMap))){
                                DCGcalleeCallerMap[value] = []
                        }
                        DCGcalleeCallerMap[value].push(key)
                }else{
                        for(var pat of Object.keys(patterns)){
                                if(patterns[pat]==value ){
                                        callees.add(pat)
                                        flag=false
                                        if(!(pat in Object.keys(DCGcalleeCallerMap))){
                                                DCGcalleeCallerMap[pat] = []
                                        }
                                        DCGcalleeCallerMap[pat].push(key)
                                        break
                                }
                        }
                        if(flag===true){
                                var matched = reg.exec(value)
                                reg.lastIndex=0;
                                if(matched!==null){
                                        for(var pat of Object.keys(patterns)){
                                                if(patterns[pat]==matched[1] ){
                                                        callees.add(pat)
                                                        if(!(pat in Object.keys(DCGcalleeCallerMap))){
                                                                DCGcalleeCallerMap[pat] = []
                                                        }
                                                        DCGcalleeCallerMap[pat].push(key)
                                                        break;
                                                }
                                        }
                                }else{
                                        var matched = reg2.exec(value)
                                        reg2.lastIndex=0;
                                        console.log("here ",value,matched)
                                        if(matched!==null){
                                                for(var pat of Object.keys(patterns)){
                                                        if(patterns[pat]==matched[1] ){
                                                                callees.add(pat)
                                                                if(!(pat in Object.keys(DCGcalleeCallerMap))){
                                                                        DCGcalleeCallerMap[pat] = []
                                                                }
                                                                DCGcalleeCallerMap[pat].push(key)
                                                                break;
                                                        }
                                                }
                                        }
                                }
                        }    
                }*/
        }
  }
  var calleeArray = Array.from(callees)
  var uneditCalleeArray = Array.from(uneditCallees)
  var DCGcallees = new Set()
  var size1=calleeArray.length
  for(var key of DCG.getKeys()){
        var values = DCG.getValues(key);
        for (var value of values) {
                DCGcallees.add(value)
        }
  }
  var DCGcalleeArray = Array.from(DCGcallees)
  var filteredArray = DCGcalleeArray.filter(function(n) {
        return uneditCalleeArray.indexOf(n)>=0 ;
    });
var size2=0
for(var key of Object.keys(DCGcalleeCallerMap)){
        var values = DCGcalleeCallerMap[key];
        size2+=values.length
  }
  console.log(size1,size2)
  console.log("\n\n")
  //console.log(uneditCalleeArray.toString())
  console.log(filteredArray.length,DCGcalleeArray.length,calleeArray.length,uneditCalleeArray.length,(filteredArray.length/DCGcalleeArray.length)*100)
  var json = JSON.stringify(Mis_edges.getGraph(), null, 2)
  fs.writeFile(path.join(outPath,"diff.json"), json , 'utf8', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The dynamic call edges missing from static call graph is saved in: " + path.join(outPath,"diff.json"));
    }
  });
  json = JSON.stringify(calleeArray, null, 2)
  fs.writeFile(path.join(outPath,"callees.json"), json , 'utf8', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The dynamic call edges missing from static call graph is saved in: " + path.join(outPath,"callees.json"));
    }
  });
  var json2 = JSON.stringify(DCGcalleeCallerMap, null, 2)
  fs.writeFile(path.join(outPath,"calleeMap.json"), json2 , 'utf8', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The dynamic call edges missing from static call graph is saved in: " + path.join(outPath,"calleeMap.json"));
    }
  });
            var csv = ""
            var x = Mis_edges.getGraph()
            for(key of Object.keys(x)){

                for (val of x[key]){
                    csv+=key+","+val+ '\n';
                        }
            }
        fs.writeFileSync(path.join(outPath,'diff.csv'), csv,function (err) {
                if (err) {
                console.log(err);}
        });
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