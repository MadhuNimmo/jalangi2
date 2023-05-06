var Graph = require("./Graph.js");
var { processInputs } = require("./preprocessmodule.js");
const path = require("path");
const fs = require("fs");
var frmFiles = [];
var DCG = new Graph();
var SCG = new Graph();

function main() {
  [DCG, SCG, SCGobj] = processInputs(
    DCGFilename,
    SCGFilename,
    inputDir,
    "Metric3"
  );

  return getTypeMetric();
}

function getStaticCallGraphEdges(input_keys) {
  item_keys = [...SCG.getKeys()];
  var output = [];
  var outGraph = new Graph();
  for (input_key of input_keys) {
    for (item_key of item_keys) {
      if (item_key == input_key || item_key.includes(input_key)) {
        var bfs_items = SCG.getBFS(item_key);
        for (bfsitem of bfs_items) {
          if (!output.includes(bfsitem)) {
            output.push(bfsitem);
          }
        }
      }
    }
  }

  for (var out_node of output) {
    for (var key of Object.keys(SCGobj)) {
      if (out_node === key) {
        for (const prop in SCGobj[key]) {
          var values = SCGobj[key][prop];
          for (var val of values) {
            outGraph.addEdge(prop, val);
          }
        }
      }
    }
  }
  return outGraph;
}
function comReach(graph1, graph2) {
  output = new Graph();
  for (key1 of graph1.getKeys()) {
    for (key2 of graph2.getKeys()) {
      if (key1 == key2 || key2.includes(key1)) {
        for (val1 of graph1.getValues(key1)) {
          for (val2 of graph2.getValues(key2)) {
            if (val1 == val2 || val2.includes(val1)) {
              if (!output.hasEdge(key1, val1)) {
                output.addEdge(key1, val1);
                //new
                break;
              }
            }
          }
        }
      }
    }
  }
  return output;
}
function getTypeMetric() {
  var tot_precision = 0;
  var tot_recall = 0;

  if (DCG.getValues("system (Native)") == undefined) {
    console.log("No entry Point Node found");
    process.exit(1);
  }

  keys = [...DCG.getValues("system (Native)")];

  var DCG_edges = DCG.getAllEdges();
  var SCG_edges = getStaticCallGraphEdges(keys);
  var COM_edges = comReach(DCG_edges, SCG_edges);

  console.log(DCG_edges.getSize(), SCG_edges.getSize(), COM_edges.getSize());

  tot_precision = (
    COM_edges.getSize() == 0 ? 0 : COM_edges.getSize() / SCG_edges.getSize()
  ).toFixed(4);
  tot_recall = (
    COM_edges.getSize() == 0 ? 0 : COM_edges.getSize() / DCG_edges.getSize()
  ).toFixed(4);

  console.log("Metric 3:");
  console.log(
    "total",
    " - ",
    "precision : ",
    tot_precision,
    "recall : ",
    tot_recall
  );


  return {
    "total DCG edges": DCG_edges.getSize(),
    "total SCG edges": SCG_edges.getSize(),
    "total Common edges": COM_edges.getSize()
  };
}
function getEdgeTypes(input, name) {
  var cnt = 0;
  keys = [...input.getKeys()];
  var app_output = new Graph();
  var frm_output = new Graph();
  var int_output = new Graph();
  for (var key of keys) {
    var values = input.getValues(key);
    for (value of values) {
      if (
        appFiles.some(function (v) {
          return key.indexOf(v) >= 0;
        })
      ) {
        if (
          appFiles.some(function (v) {
            return value.indexOf(v) >= 0;
          }) ||
          value.indexOf("(Native)") >= 0
        ) {
          if (!app_output.hasEdge(key, value)) {
            app_output.addEdge(key, value);
          }
        } else if (
          frmFiles.some(function (v) {
            return value.indexOf(v) >= 0;
          })
        ) {
          if (!int_output.hasEdge(key, value)) {
            int_output.addEdge(key, value);
          }
        }
      } else if (
        frmFiles.some(function (v) {
          return key.indexOf(v) >= 0;
        })
      ) {
        if (
          appFiles.some(function (v) {
            return value.indexOf(v) >= 0;
          })
        ) {
          if (!int_output.hasEdge(key, value)) {
            int_output.addEdge(key, value);
          }
        } else if (
          frmFiles.some(function (v) {
            return value.indexOf(v) >= 0;
          }) ||
          value.indexOf("(Native)") >= 0
        ) {
          if (!frm_output.hasEdge(key, value)) {
            frm_output.addEdge(key, value);
          }
        }
      } else if (key.indexOf("(Native)") >= 0) {
        if (
          appFiles.some(function (v) {
            return value.indexOf(v) >= 0;
          })
        ) {
          if (!app_output.hasEdge(key, value)) {
            app_output.addEdge(key, value);
          }
        } else if (
          frmFiles.some(function (v) {
            return value.indexOf(v) >= 0;
          })
        ) {
          if (!frm_output.hasEdge(key, value)) {
            frm_output.addEdge(key, value);
          }
        } else {
          cnt += 1;
        }
      } else {
        //console.log(key,value,name)
      }
    }
  }
  console.log(
    name,
    app_output.getSize(),
    int_output.getSize(),
    frm_output.getSize(),
    cnt
  );
  return {
    Application: app_output,
    Intermediate: int_output,
    Framework: frm_output,
  };
}

function getInputs() {
  // Getting the inputs from console
  if (process.argv.length == 5) {
    DCGFilename = process.argv[2];
    SCGFilename = process.argv[3];
    inputDir = process.argv[4].toString();
    var metout = main();
    const json = JSON.stringify(metout, null, 2);
    filename = process.argv[3].replace(/SCG_/, "Metrics3_");
    fs.writeFileSync(filename, json, "utf8", function (err) {
      if (err) console.log("error", err);
    });
  } else {
    console.log(
      "Please enter arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4:Output Directory"
    );
  }
}

getInputs();

/*function metric3(DCGinp,SCGinp,inpDir,appFrm) {
        DCGFilename = DCGinp
        SCGFilename = SCGinp
        inputDir = inpDir
        appfrmfiles = appFrm
        main();
        return;
}
module.exports={
        metric3
}
*/
/*
node metrics/metric3.js absolute-path-to-DCG absolute-path-to-SCG absolute-path-to-dir-to-be-analysed path-to-analysis_results.json ToDoMVC-framework-name
*/