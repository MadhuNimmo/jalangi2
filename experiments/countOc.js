const fs = require('fs');
var Graph = require('./metrics/Graph.js');
var output = new Graph();
var regex = /(\S+)\,\s\[(.*?)\]/gi
var regex2 = /Var\((\S+)\,.*/gi
var keys = []
var dynTrace = {}
var StatFlow ={}
var scallGraph ={}
var dcallGraph ={}
var finalOutput=[]
var propRegex = /Prop\((.+)\)/gi
var propArr = [];
var propNameArr = new Set();





const {performance} = require('perf_hooks');
var missingFuncs= {}
var missingFuncLocs= []
//convert to graph
function jsonToGraph(input) {
        // Converting a json Flow Graph to Graph data structure
        for (var idx in input) {
                var item = input[idx];
                for (var key in item) {
                        output.addEdge(idx, item[key]);
                }
        }
}

function countOc(dynTraceInfo){

dynTrace = dynTraceInfo

for(var item of dynTrace){
        for(var relItem in item){
                console.log(relItem)
        }
        if(["Get","Put"].includes(relItem.typ) && relItem.isC)
}
}

module.exports={
        countOc
      }