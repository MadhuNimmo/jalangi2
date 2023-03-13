/*
The edges present in static but not in dynamic with the caller more than 2 callees.
*/
var { processInputs } = require("./preprocess.js");
var Graph = require("./Graph.js");
const path = require("path");
const clonedeep = require("lodash.clonedeep");

const fs = require("fs");

var DCG = new Graph();
var SCG = new Graph();
var patterns = {};
var editMaps = {};

function main() {
  [DCG, SCG, patterns, editMaps] = processInputs(
    DCGFilename,
    SCGFilename,
    inputDir,
    "EdgeDiff"
  );
  getEdgeDiff();
}

function getEdgeDiff() {
  // Identifying common edges between DCG and SCG
  DCG_keys = [...DCG.getKeys()];
  SCG_keys = [...SCG.getKeys()];
  //var Mis_edges = clonedeep(SCG);
  var Mis_edges = new Graph();

  /*for (var SCG_key of SCG_keys) {
    var SCG_values = SCG.getValues(SCG_key);
    for (SCG_value of SCG_values) {
      for (DCG_key of DCG_keys) {
        if (SCG_key === DCG_key || SCG_key.includes(DCG_key)) {
          for (DCG_value of DCG.getValues(DCG_key)) {
            if (DCG_value == SCG_value || SCG_value.includes(DCG_value)) {
              Mis_edges.removeEdge(SCG_key, SCG_value);
            }
          }
        }
      }
    }
  }*/
  for (var SCG_key of SCG_keys) {
        var flag_key = true;
          for (var DCG_key of DCG_keys) {
            if (SCG_key === DCG_key || SCG_key.includes(DCG_key) && (!SCG_key.includes("(Native)") && !SCG_key.includes("prologue.js") && !SCG_key.includes("preamble.js"))) {
                flag_key = false;
              var SCG_values = SCG.getValues(SCG_key);
                for(SCG_value of SCG_values){
                        var flag=true
                        for (DCG_value of DCG.getValues(DCG_key)) {
                        if (DCG_value == SCG_value || SCG_value.includes(DCG_value)) {
                                flag=false
                                break;
                              }
                }
                if(flag==true && !SCG_value.includes("(Native)") && !SCG_value.includes("prologue.js") && !SCG_value.includes("preamble.js")){
                        Mis_edges.addEdge(SCG_key, SCG_value);
                }
              }
            }
          }
          if(flag_key==true && (!SCG_key.includes("(Native)") && !SCG_key.includes("prologue.js") && !SCG_key.includes("preamble.js"))){
                var SCG_values = SCG.getValues(SCG_key);
                for(SCG_value of SCG_values){
                        if(!SCG_value.includes("(Native)") && !SCG_value.includes("prologue.js") && !SCG_value.includes("preamble.js")){
                                Mis_edges.addEdge(SCG_key, SCG_value);
                        }
                }
          }
        }
  var Mis_keys = [...Mis_edges.getKeys()];
  for(var mis_key of Mis_keys){
        var values = Mis_edges.getValues(mis_key);
        if(values.length<=2){
                Mis_edges.removeKey(mis_key);
        }
  }
  /*function inverse(obj) {
    var retobj = {};
    for (var key in obj) {
      retobj[obj[key]] = key;
    }
    return retobj;
  }
  patterns = inverse(patterns);
  editMaps = inverse(editMaps);*/

  var json = JSON.stringify(Mis_edges.getGraph(), null, 2);
  fs.writeFile(path.join(outPath, "diff.json"), json, "utf8", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "The static call edges missing from dynamic call graph is saved in: " +
          path.join(outPath, "diff.json")
      );
    }
  });

 /* var DCGEditMap = {};
  for (var key of DCG.getKeys()) {
    var values = DCG.getValues(key);
    for (var value of values) {
      if (value.endsWith("(Native)")) {
        valpattern = value;
      } else if (editMaps[value]) {
        valpattern = editMaps[value];
      }
      if (!(valpattern in DCGEditMap)) {
        DCGEditMap[valpattern] = [];
      }
      if (key.endsWith("(Native)")) {
        keypattern = key;
      } else if (editMaps[key]) {
        keypattern = editMaps[key];
      }
      if (!(editMaps[key] in DCGEditMap[valpattern])) {
        DCGEditMap[valpattern].push(keypattern);
      }
    }
  }
  var json3 = JSON.stringify(DCGEditMap, null, 2);
  fs.writeFile(
    path.join(outPath, "calleeMap.json"),
    json3,
    "utf8",
    function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log(
          "The dynamic call edges missing from static call graph is saved in: " +
            path.join(outPath, "calleeMap.json")
        );
      }
    }
  );*/
  var size2 = 0;
  SCG_keys = [...SCG.getKeys()];
  for (var SCG_key of SCG_keys) {
        var SCG_values = SCG.getValues(SCG_key);
        size2 += SCG_values.length;
  }
  console.log(size2);
  var size3 = 0;
  Mis_keys = [...Mis_edges.getKeys()];
  for (var key of Mis_keys) {
    var values = Mis_edges.getValues(key);
    size3 += values.length;
  }
  console.log(size3);
}

function getInputs() {
  // Getting the inputs from console
  if (process.argv.length == 6) {
    DCGFilename = process.argv[2];
    SCGFilename = process.argv[3];
    inputDir = process.argv[4].toString();
    outPath = process.argv[5];
    main();
  } else {
    console.log(
      "Please enter arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4:Output Directory"
    );
  }
}

getInputs();

/*
node /Users/madhurimachakraborty/Documents/GitHub/jalangi2/experiments/metrics/StatVSDynEdgesinStat.js /Users/madhurimachakraborty/Documents/FSMetrics/todo_vanillajs/todo_vanillajs_DCG.json /Users/madhurimachakraborty/Documents/FSMetrics/todo_vanillajs/FS5SCG_OPT.json /Users/madhurimachakraborty/Documents/todomvc-master/examples/vanillajs/ /Users/madhurimachakraborty/Documents/FSMetrics/todo_vanillajs/
*/
