const { exec } = require("child_process");
var x="";
var y ="";
var cnt=0;
var arr=[];
var newarr=[];
var newarr2=[];
var xarr=[];
var yarr=[];
var zarr=[];
var Dregex=/.+\s\(.*?\)\s\-\>\s.+\s\(.*?\)/;
//var Cregex=/[0-9]+\,[0-9]+\,[0-9]+\,[0-9]+/g;
var Cregex=/[0-9]+\:[0-9]+\-[0-9]+/g;
var Sregex=/.+\s\(.*?\)\s\-\>\s.+\s\((Native)\)/;
const fs = require('fs');

if (process.argv.length==3){
var inp=process.argv[2];
var inpChar = inp.split(".");
}
else if (process.argv.length==4){
  //console.log(process.argv)
  xarr = fs.readFileSync(process.argv[2]).toString().split("\n");
  yarr = fs.readFileSync(process.argv[3]).toString().split("\n");
  /*newarr = fs.readFileSync(process.argv[4]).toString().split("\n");
  for (i=0;i<newarr.length;i++){
    newarr[i]+="\n";
    newarr2.push(newarr[i].split(""));
  }*/
}

function main(){
  if (process.argv.length==3){
if (inpChar[inpChar.length-1]==="js"){

  newarr = fs.readFileSync(inp).toString().split("\n");
  for (i=0;i<newarr.length;i++){
    newarr[i]+="\n";
    newarr2.push(newarr[i].split(""));
  }
  jscall(inp);
}
  }
  else{
    /*console.log(xarr); 
    console.log(yarr); 
    console.log(newarr2);*/
    /*for (i=0;i<newarr.length;i++){
      newarr[i]+="\n";
      newarr2.push(newarr[i].split(""));
    }*/
    //console.log(newarr2)
    compare(xarr,yarr)
  }
}

function rowSpaces(inp2){
  cnt=0;
  //console.log("inp"+inp2)
  for (m=0;m<inp2-1;m++){
    //console.log(newarr2[m])
    cnt+=newarr2[m].length;
  }

  return cnt
}

function charSpaces(inp){
  //console.log(inp)
  arr=[];
  rowcol=inp.split(",")
  for (k=0;k<rowcol.length;k+=2){
  arr.push(rowSpaces(parseInt(rowcol[k]))+parseInt(rowcol[k+1])-1);
  }
  //console.log("strn"+arr)
  return arr;
}
function f1(command1) {
  return new Promise(resolve=>{
    //setTimeout(() => {
  console.log("Executing Dynamic");
  const process = exec(command1);

  process.stdout.on('data', (data) => {
    if (data.toString().match(Dregex)){
    //xarr.push((data.toString().match(/.+\n/g)).toString());
    xarr.push(...data.toString().split("\n").slice(0,-1));
  }
    x+=data.toString();
    //console.log(data.toString());
  }
  )

  process.stderr.on('data', (data) => {
    console.log('stderr: ' + data.toString())
  })

  process.on('exit', (code) => {
    resolve(x,xarr);
  })
//});
});
}


function f2(command2){
  return new Promise(resolve=>{
    //setTimeout(() => {
  console.log("Executing Static")
  const process = exec(command2)

  process.stdout.on('data', (data) => {
    if (!data.toString().match(Sregex)){
    //yarr.push((data.toString().match(/.+\n/g)).toString());
    yarr.push(...data.toString().split("\n").slice(0,-1));
    }
    y+=data.toString();
    //console.log(data.toString())
  })

  process.stderr.on('data', (data) => {
    console.log('Dynamic stderr: ' + data.toString())
  })

  process.on('exit', (code) => {
    resolve(y,yarr);
  })
//});
});
}

async function jscall(inp){
command1="node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis experiments/DynCallGraphU.js "+inp;
command2="node ../js-callgraph-master/js-callgraph.js --cg "+inp;
await f1(command1);
await f2(command2);
compare(newarr2,xarr,yarr)
}


function compare(xarr,yarr){
  /*for (i = 0; i < xarr.length; i++){
    found=xarr[i].match(Cregex)
    for(j = 0; j < found.length; j++){
      xarr[i]=xarr[i].replace(found[j],found[j].split(",")[0]+":"+(charSpaces(found[j]).join("-")));
  }
  }
  for (i = 0; i < xarr.length; i++){
    xarr[i]=xarr[i].replace(/_orig_/g,'')
    xarr[i]=xarr[i].replace(/index\.html\:9274\s/g,'');

  }*/
  const inDynamic = xarr.filter((val) => yarr.indexOf(val) == -1);  
  const inStatic = yarr.filter((val) => xarr.indexOf(val) == -1);  
  //console.log(inStatic.length)
  //console.log(inStatic.length>0?inStatic.join("\n"):"None");
  //console.log("Edges missing from Static:");
  //console.log(inDynamic.length>0?inDynamic.join("\n"):"None");
  //console.log(inDynamic.length)
  cnt=0
  //result=[]

  for (var i=inDynamic.length-1;i>=0;i--){
    regex_patternX=inDynamic[i].match(Cregex)
    for (j=0;j<yarr.length;j++){
      regex_patternY=yarr[j].match(Cregex)
      if(regex_patternX!=null && regex_patternY!=null && regex_patternX[0]==regex_patternY[0] && regex_patternX[1]==regex_patternY[1]){
        //console.log(inDynamic[i]);
        //console.log(yarr[j]);
        inDynamic.splice(i,1);
      }
     }
    }
    //console.log(cnt)
    //console.log(inDynamic.length)
    //console.log(inDynamic.length)
  console.log(inDynamic.length>0?inDynamic.join("\n"):"None");
  }
  
  //console.log("Edges missing from Dynamic:");
  //console.log(inStatic.length>0?inStatic.toString():"None");


//function arrayRemove(arr, value) { return arr.filter(function(ele){ return ele != value; });}
//var result = arrayRemove(array, 6);
main()
