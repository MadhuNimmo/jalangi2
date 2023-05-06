/* Identify the edges preset in original DCG and original SCG but absent in pruned SCG.*/

var { processInputs } = require("./preprocess.js");
var Graph = require("./Graph.js");
const path = require("path");
const clonedeep = require("lodash.clonedeep");

const fs = require("fs");

var DCG = new Graph();
var SCG = new Graph();
var FSSCG = new Graph();
var Comm = new Graph();
var patterns = {};
var editMaps = {};

function main() {
  [DCG, SCG, patterns, editMaps] = processInputs(
    DCGFilename,
    SCGFilename,
    inputDir,
    "EdgeDiff"
  );
  getEdgeComm();
  [Comm, FSSCG, patterns, editMaps] = processInputs(
        path.join(outPath, "EdgesinDCGandSCG.json"),
        FSSCGFilename,
        inputDir,
        "EdgeDiff"
      );
   getEdgeDiff();
}

function getEdgeComm() {
  // Identifying common edges between DCG and SCG
  DCG_keys = [...DCG.getKeys()];
  SCG_keys = [...SCG.getKeys()];
  //var Mis_edges = clonedeep(SCG);
  var Comm_edges = new Graph();

  for (var SCG_key of SCG_keys) {
        //var flag_key = true;
          for (var DCG_key of DCG_keys) {
            //if (SCG_key === DCG_key || SCG_key.includes(DCG_key) && (!SCG_key.includes("(Native)") && !SCG_key.includes("prologue.js") && !SCG_key.includes("preamble.js"))) {
            if (SCG_key === DCG_key || SCG_key.includes(DCG_key) || DCG_key.split(":")[DCG_key.split(":").length-1] == SCG_key.split(":")[SCG_key.split(":").length-1]) {
                //flag_key = false;
              var DCG_values = DCG.getValues(DCG_key);
              var SCG_values= SCG.getValues(SCG_key);
              for(DCG_value of DCG_values){
                        //var flag=true
                      for (SCG_value of SCG_values) {
                        if (DCG_value == SCG_value || SCG_value.includes(DCG_value) || DCG_value.split(":")[DCG_value.split(":").length-1] == SCG_value.split(":")[SCG_value.split(":").length-1]) {
                                Comm_edges.addEdge(SCG_key, SCG_value);
                                break;
                              }
                }
                /*if(flag==true && !SCG_value.includes("(Native)") && !SCG_value.includes("prologue.js") && !SCG_value.includes("preamble.js")){
                        Mis_edges.addEdge(SCG_key, SCG_value);
                }*/
              }
            }
          }
          /*if(flag_key==true && (!SCG_key.includes("(Native)") && !SCG_key.includes("prologue.js") && !SCG_key.includes("preamble.js"))){
                var SCG_values = SCG.getValues(SCG_key);
                for(SCG_value of SCG_values){
                        if(!SCG_value.includes("(Native)") && !SCG_value.includes("prologue.js") && !SCG_value.includes("preamble.js")){
                                Mis_edges.addEdge(SCG_key, SCG_value);
                        }
                }
          }*/
        }
  var json = JSON.stringify(Comm_edges.getGraph(), null, 2);
  fs.writeFileSync(path.join(outPath, "EdgesinDCGandSCG.json"), json, "utf8", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "The dynamic call edges common with original static call graph is saved in: " +
          path.join(outPath, "EdgesinDCGandSCG.json")
      );
    }
  });
  return Comm_edges;
}

function getEdgeDiff() {
        // Identifying edges in Comm but missing from pruned SCG
        Comm_keys = [...Comm.getKeys()];
        FSSCG_keys = [...FSSCG.getKeys()];
        var Mis_edges = clonedeep(Comm);

        for (var Comm_key of Comm_keys) {
          var Comm_values = Comm.getValues(Comm_key);
          for (Comm_value of Comm_values) {
            for (FSSCG_key of FSSCG_keys) {
              if (Comm_key == FSSCG_key || FSSCG_key.includes(Comm_key)) {
                //console.log("here", Comm_values, FSSCG.getValues(FSSCG_key))
                for (FSSCG_value of FSSCG.getValues(FSSCG_key)) {
                      if (Comm_value == FSSCG_value || FSSCG_value.includes(Comm_value)) {
                        Mis_edges.removeEdge(Comm_key, Comm_value);
                      }
                }
              }
            }
          }
        }

        var json = JSON.stringify(Mis_edges.getGraph(), null, 2);
        fs.writeFileSync(path.join(outPath, "EdgesinDCGandSCGnotinOtherSCG.json"), json, "utf8", function (err) {
          if (err) {
            console.log(err);
          } else {
            console.log(
              "The dynamic call edges missing from static call graph is saved in: " +
                path.join(outPath, "EdgesinDCGandSCGnotinOtherSCG.json")
            );
          }
        });
        return Mis_edges;
      }

function getInputs() {
  // Getting the inputs from console
  if (process.argv.length == 7) {
    DCGFilename = process.argv[2];
    SCGFilename = process.argv[3];
    FSSCGFilename = process.argv[4];
    inputDir = process.argv[5].toString();
    outPath = process.argv[6];
    main();
  } else {
    console.log(
      "Please enter arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4:Output Directory"
    );
  }
}

getInputs();