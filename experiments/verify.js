const { exec } = require("child_process");
//global.Promise = require('bluebird');
var x=-1;
var y =-1;
var z=-1;
var newinp="";
var newarr=[];
var xarr=[];
var yarr=[];
var zarr=[];
const fs = require('fs');
const readline = require('readline');

var inp=process.argv[2];
var inpChar = inp.split(".");

if (inpChar[inpChar.length-1]==="txt"){
  newarr = fs.readFileSync(inp).toString().split("\n");
  ok(newarr);
}
else{
  jscall(inp);
}

function f1(command1) {
  return new Promise(resolve=>{
    setTimeout(() => {
  const process = exec(command1)

  process.stdout.on('data', (data) => {
    //console.log('stdout: ' + data.toString());
    //xarr.push(data.toString());
    //x=xarr[xarr.length-1];
    x=data.toString();
  }
  )

  process.stderr.on('data', (data) => {
    //console.log('stderr: ' + data.toString())
  })

  process.on('exit', (code) => {
    //console.log('child process exited with code ' + code.toString())
    //console.log("x "+x.split("\n").slice(-2,1));
    x=x.split("\n").slice(-2,1).toString();
    resolve(x);
  })
},5000);
});
}


function f2(command2){
  return new Promise(resolve=>{
    setTimeout(() => {
  const process = exec(command2)

  process.stdout.on('data', (data) => {
    //console.log('stdout: ' + data.toString())
    //yarr.push(data.toString());
    //y=yarr[yarr.length-1];
    y=data.toString();
  })

  process.stderr.on('data', (data) => {
    //console.log('stderr: ' + data.toString())
  })

  process.on('exit', (code) => {
    //console.log('child process exited with code ' + code.toString())
    //console.log("y "+y.split("\n").slice(-2,1));
    y=y.split("\n").slice(-2,1).toString();
    resolve(y);
  })
},5000);
});
}

function f3(command3){
  return new Promise(resolve=>{
    setTimeout(() => {
  const process = exec(command3)

  process.stdout.on('data', (data) => {
    //console.log('stdout: ' + data.toString())
    //zarr.push(data.toString());
    //z=zarr[zarr.length-1];
    z=data.toString();
  })

  process.stderr.on('data', (data) => {
    //console.log('stderr: ' + data.toString())

  })

  process.on('exit', (code) => {
    //console.log('child process exited with code ' + code.toString())
    //z==-1?console.log("yes"):console.log("no");
    //+z.split("\n").slice(-2,1));
    z=z.split("\n").slice(-2,1).toString();
    resolve(z);
  })
},5000);
});
}
async function jscall(inp){
  //return new Promise(resolve=>{
    //setTimeout(() => {
command1="node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis experiments/func_call2.js "+inp;
command2="node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis experiments/func_call4.js "+inp;
command3="node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis experiments/comp_call.js "+inp;
const x=[f1(command1),f2(command2),f3(command3)];
var result= await Promise.all(x);
//console.log(result);
//var resultn=""+result;
var report = result.every(function (e) {
  return typeof e === "string" ;
});
//console.log("report="+ report);
if (report){
var resulta = result.map(r=>Number(r.split("\n").slice(0,1)));
console.log(resulta);
const allEqual = resulta.every( v => v === resulta[0] );
//console.log(allEqual);
if (allEqual){
  console.log(inp +" passed");
}
else{
  console.log(inp+ " has issues. the values are ");
  console.log(resulta);
}
}
else{
  console.log(inp+ " has issues. the values are "+ resulta);
}
}
async function ok(newarr){
  for(i in newarr) {
    
    newinp=inp.split("/").slice(0,-1).join("/")+"/"+newarr[i]+".js";
    newarr[i]=newinp;
  }
  for (let i = 0, p = Promise.resolve(); i < newarr.length; i++) {
    p = p.then(()=>jscall(newarr[i]));
    //return p;
  }
}
