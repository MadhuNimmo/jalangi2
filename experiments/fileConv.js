
var xarr=[];
var inp3=[];
var fn="";
var data = {};
const fs = require('fs');
const matchAll = require("match-all");
const filenames = [];
function conv(xarr)
{
      fileconv(xarr);
      //console.log(xarr);
      fs.writeFileSync("/home/anon/js-acg-examples-master/react15_test_results/DynRes_react15NatEdit.txt",xarr.join("\n"));
}

function fileconv(xarr){

        for (i = 0; i < xarr.length; i++){
                xarr[i]=xarr[i].replace(/_orig_/g,'')
                xarr[i]=xarr[i].replace(/(\S)+\.html\:[0-9]+\s/g,'');
            
              }
        for (i = 0; i < xarr.length; i++){

                regex_pattern = matchAll(xarr[i],/\((((?!(\-\>))(\S)+)\@([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+))\)|\((undefined)\)/g).toArray();

                for(j = 0; j < regex_pattern.length; j++){

                        if (filenames.includes(regex_pattern[j].split("@")[0])){
                                inp3=filedata[regex_pattern[j].split("@")[0]]
                        }
                        else{
                                continue;
                        }
                        if (regex_pattern[j]=='undefined'){
                                continue
                        }
                        else{
                                fn=regex_pattern[j].split("@")[1];
                        }
                
                try{
                xarr[i]=xarr[i].replace(fn,fn.split(":")[0]+":"+(charSpaces(fn,inp3).join("-")));
                }
                catch(e){
               continue;
                }
              }
              }
        }

function rowSpaces(inp2,inp3){
        cnt=0;
        for (m=0;m<inp2-1;m++){
          cnt+=inp3[m].length+1;
        }
      
        return cnt
      }
      
function charSpaces(inp,inp3){
        arr=[];
        rowcol=inp.split(":")
        for (k=0;k<rowcol.length;k+=2){
        arr.push(rowSpaces(parseInt(rowcol[k]),inp3)+parseInt(rowcol[k+1])-1);
        }
        return arr;
      }
xarr = fs.readFileSync(process.argv[2]).toString().split("\n");
dirname = process.argv[3].toString();

function readFilesSync(dir) {
      
        fs.readdirSync(dir).forEach(filename => {
          if (filename.endsWith('.js')){
          filenames.push(filename)
          data[filename]=fs.readFileSync(dirname+"/"+filename).toString().split("\n")
          }
        });
        return data;
      }

const filedata = readFilesSync(dirname);
conv(xarr)