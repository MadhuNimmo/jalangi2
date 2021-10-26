const path = require('path');
const matchAll = require("match-all");
var dynCallGraph = [];
var statCallGraph = [];
var regex = /([0-9]+\:[0-9]+\-[0-9]+)|(Native)/g;
const fs = require('fs');
const filenames = [];
var data = {};
var filedata="";


function main() {

  dynCallGraph = fs.readFileSync(process.argv[2]).toString().split("\n");
  statCallGraph = fs.readFileSync(process.argv[3]).toString().split("\n");
  inputDir = (process.argv[4]).toString();
  outPath = process.argv[4];

  finalPath = path.join(outPath, "MsngEdgeStat2.txt");
  filedata = readJSFiles(inputDir);

  dynCallGraphEdit = fileConv(dynCallGraph)
  compare(dynCallGraphEdit, statCallGraph, outPath)
}

function fileConv(dynCallGraph) {
  //Removing unnecessary information 
  for (i = 0; i < dynCallGraph.length; i++) {
    dynCallGraph[i] = dynCallGraph[i].replace(/_orig_/g, '')
    dynCallGraph[i] = dynCallGraph[i].replace(/(\S)+\.html\:[0-9]+\s/g, '');

  }
  for (i = 0; i < dynCallGraph.length; i++) {

    regex_pattern = matchAll(dynCallGraph[i], /\((((?!(\-\>))(\S)+)\@([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+))\)|\((undefined)\)/g).toArray();

    for (j = 0; j < regex_pattern.length; j++) {

      if (filenames.includes(regex_pattern[j].split("@")[0])) {
        inpJSFile = filedata[regex_pattern[j].split("@")[0]]
      }
      else {
        continue;
      }
      if (regex_pattern[j] == 'undefined') {
        continue
      }
      else {
        lineInfo = regex_pattern[j].split("@")[1];
      }

      try {
        dynCallGraph[i] = dynCallGraph[i].replace(lineInfo, lineInfo.split(":")[0] + ":" + (charSpaces(lineInfo, inpJSFile).join("-")));
      }
      catch (e) {
        continue;
      }
    }
  }
  return dynCallGraph;
}

function rowSpaces(line, inpJSFile) {
  //Calculating the char spaces occupied by a line
  cnt = 0;
  for (k = 0; k < line - 1; k++) {
    cnt += inpJSFile[k].length + 1;
  }

  return cnt
}

function charSpaces(lineInfo, inpJSFile) {
  //Converting the row column to char spaces 
  arr = [];
  rowcol = lineInfo.split(":")
  for (k = 0; k < rowcol.length; k += 2) {
    arr.push(rowSpaces(parseInt(rowcol[k]), inpJSFile) + parseInt(rowcol[k + 1]) - 1);
  }
  return arr;
}

function readJSFiles(dir) {
  //Reading the javascript files to format the dynamic call raph
  fs.readdirSync(dir).forEach(filename => {
    if (filename.endsWith('.js')) {
      filenames.push(filename)
      data[filename] = fs.readFileSync(inputDir + "/" + filename).toString().split("\n")
    }
  });
  return data;
}

function compare(dynCallGraph, statCallGraph) {
  //Identifying dynamic call graph edges that are missing from static call graph
  const inDynamic = dynCallGraph.filter((val) => statCallGraph.indexOf(val) == -1);
  //Eliminating the mismatched edges where only the name of the function is different
  for (var i = inDynamic.length - 1; i >= 0; i--) {
    regex_patternX = inDynamic[i].match(regex)
    for (var j = statCallGraph.length - 1; j >= 0; j--) {
      regex_patternY = statCallGraph[j].match(regex)
      if (regex_patternX != undefined && regex_patternY != undefined){
        if (regex_patternX[0] === regex_patternY[0] && regex_patternX[1] === regex_patternY[1]) {
        inDynamic.splice(i, 1);
        break;
      }
    }
    }
  }
  //Writing the output to a file
  fs.writeFile(finalPath, inDynamic.join("\n"), function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("The dynamic call edges missing from static call graph is saved in: " + finalPath);
    }
  });

}

main()