const fs = require('fs');
var {flowRead} = require('./flowRead');
var {countOc} = require('./countOc');
var {post_prcs} = require('./post_prcs');
var {parse_fg} = require('./parse_fg');
var mismatches = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
var trace = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
var inputDir = (process.argv[4]).toString();
/*var flowGraph = JSON.parse(fs.readFileSync(process.argv[5], 'utf8'));
var StatGraph = JSON.parse(fs.readFileSync(process.argv[6], 'utf8'));
var DynGraph = JSON.parse(fs.readFileSync(process.argv[7], 'utf8'));*/

var output =[]
var dynTrace = flowRead(mismatches,trace,inputDir)

const json = JSON.stringify(dynTrace, null, 2)
filename=(process.argv[3]).replace(/trace.json$/,"rel_traces.json");
fs.writeFileSync(filename, json, 'utf8',function(err) {
if(err) console.log('error', err);
});
var cnts = countOc(dynTrace)
console.log(cnts)
/*
var statFlwGrph = post_prcs(flowGraph,inputDir)
const json1 = JSON.stringify(statFlwGrph, null, 2)
filename=(process.argv[5]).replace(/OPT.json$/,"OPT_EDIT.json");
fs.writeFileSync(filename, json1, 'utf8',function(err) {
if(err) console.log('error', err);
});
var [output,props,propNames] = parse_fg(dynTrace,statFlwGrph,StatGraph,DynGraph)
var filename=(process.argv[3]).replace(/trace.json$/,"causes5.json");
const json2 = JSON.stringify(output, null, 2)
fs.writeFileSync(filename, json2, 'utf8',function(err) {
if(err) console.log('error', err);
});

var filename=(process.argv[3]).replace(/trace.json$/,"props.json");
const json3 = JSON.stringify(props, null, 2)
fs.writeFileSync(filename, json3, 'utf8',function(err) {
if(err) console.log('error', err);
});
var filename=(process.argv[3]).replace(/trace.json$/,"propNames.json");
const json4 = JSON.stringify(propNames, null, 2)
fs.writeFileSync(filename, json4, 'utf8',function(err) {
if(err) console.log('error', err);
});*/
