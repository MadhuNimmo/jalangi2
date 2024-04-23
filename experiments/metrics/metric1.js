var { processInputs } = require("./preprocess.js");
var Graph = require("./Graph.js");
const path = require("path");
const fs = require("fs");
var DCG = new Graph();
var SCG = new Graph();
var commonCallSite = new Graph();
let allFiles= []

function main() {

  appFiles = appfrmfiles[benchmark_name]["app"];
  frmFiles = appfrmfiles[benchmark_name]["frm"];

  allFiles = appFiles.concat(frmFiles);
  [DCG, SCG] = processInputs(DCGFilename, SCGFilename, allFiles);

  //filtering edges with common call site in DCG and SCG
  filter(DCG, SCG);
  console.log(DCG.getSize());
  console.log(SCG.getSize());
  console.log(commonCallSite.getSize());

  return getTypeMetric();
}

function filter(DCG_items, SCG_items) {
  // Identifying common edges between DCG and SCG
  DCG_keys = [...DCG_items.getKeys()];
  item_keys = [...SCG_items.getKeys()];
  for (var DCG_key of DCG_keys) {
    var DCG_values = DCG_items.getValues(DCG_key);
    for (DCG_value of DCG_values) {
      for (SCG_key of item_keys) {
        if (DCG_key === SCG_key || SCG_key.includes(DCG_key)) {
          for (SCG_value of SCG_items.getValues(SCG_key)) {
            if (DCG_value === SCG_value || SCG_value.includes(DCG_value)) {
              commonCallSite.addEdge(DCG_key, DCG_value);
            }
          }
        }
      }
    }
  }
}

function getStaticCallGraphEdges(input_key) {
  //Identifying the Static call edges given a callSite
  item_keys = [...SCG.getKeys()];

  for (SCG_key of item_keys) {
    if (input_key == SCG_key || SCG_key.includes(input_key)) {
      return [...SCG.getValues(SCG_key)];
    }
  }
  return [];
}
function callSiteType(callSite) {
  if (
    allFiles.some(function (v) {
      return callSite.indexOf(v) >= 0;
    })
  ) {
    return true;
  } else {
    return false;
  }
}
function getTypeMetric() {
  //Calculating the average precision and recall based on the DCG callSites
  var tot_precision = 0;
  var tot_recall = 0;

  var key_cnt = 0;
  keys = [...DCG.getKeys()];
  for (var key of keys) {
    if (callSiteType(key) != "none") {
      key_cnt += 1;
      var DCG_values = [...DCG.getValues(key)].length;
      var SCG_values = getStaticCallGraphEdges(key).length;
      var Comm_values =
        commonCallSite.getValues(key) == undefined
          ? 0
          : [...commonCallSite.getValues(key)].length;
      tot_precision += Comm_values == 0 ? 0 : Comm_values / SCG_values;
      tot_recall += Comm_values == 0 ? 0 : Comm_values / DCG_values;
    }
  }
  var tot_avg_precision =
    tot_precision == 0 ? 0 : (tot_precision / key_cnt).toFixed(4);
  var tot_avg_recall = tot_recall == 0 ? 0 : (tot_recall / key_cnt).toFixed(4);

  console.log("Metric 1:");
  console.log(
    "total",
    " - ",
    "precision : ",
    tot_avg_precision,
    "recall : ",
    tot_avg_recall
  );
  return {
    "total call sites": key_cnt,
    "total avg precision": tot_avg_precision,
    "total avg recall": tot_avg_recall
  };
}

function getInputs() {
  // Getting the inputs from console
  if (process.argv.length == 7) {
    DCGFilename = process.argv[2];
    SCGFilename = process.argv[3];
    inputDir = process.argv[4].toString();
    appfrmfiles = JSON.parse(fs.readFileSync(process.argv[5], "utf8"));
    benchmark_name = process.argv[6];
    var metout = main();
    const json = JSON.stringify(metout, null, 2);
    filename = process.argv[3].replace(/SCG/, "Metrics1");
    if(!fs.existsSync(filename)){
            fs.writeFileSync(filename, json, "utf8", function (err) {
              if (err) console.log("error", err);
            });
    }
    else{
      fs.readFile(filename, "utf8", function (err, data) {
        if (err) {
          console.error("Error reading file:", err);
          return;
        }

        let existingJson = {};
        try {
          // Parse the existing JSON content
          existingJson = JSON.parse(data);
        } catch (parseErr) {
          console.error("Error parsing existing JSON content:", parseErr);
          return;
        }

        // Merge the existing JSON with the new JSON object (metout)
        const mergedJson = { ...existingJson, ...metout };

        // Convert the merged JSON object to a string with formatting
        const mergedJsonString = JSON.stringify(mergedJson, null, 2);

        // Write the merged JSON content back to the file
        fs.writeFile(filename, mergedJsonString, "utf8", function (writeErr) {
          if (writeErr) {
            console.error("Error writing merged JSON to file:", writeErr);
          } else {
            console.log("Merged JSON written to file:", filename);
          }
        });
      });
    }
  } else {
    console.log(
      "Please enter arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4:Output Directory"
    );
  }
}

getInputs();
/*
node metrics/metric1.js absolute-path-to-DCG absolute-path-to-SCG absolute-path-to-dir-to-be-analysed JSON-file-indentifying-application-and-framework-code ToDoMVC-framework-name
*/
