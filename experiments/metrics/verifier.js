var {processInputs} = require('./preprocess.js');
var Graph = require('./Graph.js');
const path = require('path');
const clonedeep = require('lodash.clonedeep')


const fs = require('fs');
/*var filenames = [];
var data = {};
var caller, callee;
var filedata = {};*/
//var relevantFiles=new Set();
var output=new Graph();
var input= {};
//var commonCallSite = new Graph();

function main() {
        function jsonToGraph(input) {
                // Converting a json Flow Graph to Graph data structure
                for (var idx in input) {
                        var item = input[idx];
                        for (var key in item) {
                                output.addEdge(idx, item[key]);
                        }
                }
        }
        jsonToGraph(input)
        getBFS()
}

function getBFS() {
     var x = output.doesPathExist("Func(/Users/UserXYZ/Documents/todomvc-master/examples/vanillajs/js/controller.js@28:616-670)","Callee(/Users/UserXYZ/Documents/todomvc-master/examples/vanillajs/js/view.js@168:4441-4474)")
     //output.getBFS("Callee(/Users/UserXYZ/Documents/todomvc-master/examples/knockoutjs/node_modules/knockout/build/output/knockout-latest.js@4614:242549-242584)")
     console.log(x)
    // Identifying common edges between DCG and SCG
    /*DCG_keys = [...DCG.getKeys()]
    SCG_keys = [...SCG.getKeys()]*/
    //console.log(DCG,SCG)
    /*var Mis_edges = clonedeep(DCG)

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

    }*/

  //Writing the output to a file
  //const json = JSON.stringify(Mis_edges.getGraph(), null, 2)
  /*fs.writeFile(path.join(outPath,"diff.json"), json , 'utf8', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The dynamic call edges missing from static call graph is saved in: " + path.join(outPath,"diff.json"));
    }
  });*/
        /*    var csv = ""
            var x = Mis_edges.getGraph()
            for(key of Object.keys(x)){

                for (val of x[key]){
                    csv+=key+","+val+ '\n';
                        }
            }
        fs.writeFileSync(path.join(outPath,'.csv'), csv,function (err) {
                if (err) {
                console.log(err);}
        });*/
}

function getInputs() {
        // Getting the inputs from console
        //if (process.argv.length == 6) {
                var flowGraph = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
                input = flowGraph;
                main();
        //}
        /*else {
                console.log("Please enter arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4:Output Directory")
        }*/
}

getInputs()