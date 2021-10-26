const fs = require('fs');
const path = require('path');
var regex = /\((\S+)\@([0-9]+\:[0-9]+\-[0-9]+)(.*)/gi
var regex2 = /\((\S+)\,(.*)/gi
var filenames=[]
var fileData = {};
///\((\S+)\@[0-9]+\:([0-9]+\-[0-9]+)/gi


function post_prcs(statflowGraph){
        readJSFiles(inputDir);
        var StatFlow = statflowGraph//JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
        var StatFlowOut = {}

        //no more processing
        //but lexvar may need some
        for (var key of Object.keys(StatFlow)) {
                //if(key.match(regex)){
                        if(!(key.includes("prologue.js"))){//|| key.includes("%ssa_val")
                                values = StatFlow[key]
                                if (key.startsWith("LexVar")){
                                        var key_match = regex2.exec(key)
                                        regex2.lastIndex=0;
                                
                                        if (key_match){
                                                //temporary path ..needs an universal solution
                                                //new to avoid changes to $$
                                                //key = key.replace(key_match[0],"(/"+key_match[0].split("//").slice(-1))
                                                key = "LexVar"+"(/"+key_match[0].split("//").slice(-1)
                                                key= key.split("LexVar(/(L").join("LexVar(")
                                                //new lexvar in form /fcn/fcn
                                                var multFun = key.split(".js").slice(-1)[0]
                                                if(multFun.split("/").length>2){
                                                        key = key.replace(multFun,multFun.split("/").slice(0)[0]+"/"+multFun.split("/").slice(-1)[0])
                                                        //key = multFun.split("/").slice(-1)[0]

                                                } 
                                                
                                                if(key.includes(":")){
                                                        var key_match2 = regex2.exec(key)
                                                        regex2.lastIndex=0;
                                                        if(key_match2){
                                                                key = key.replace(key_match2[1],key_match2[1].split(":").slice(0,1))
                                                        }       
                                                }                                         
                                        }
                                }else{  //need to check all other addresses for self called functions and repair their address
                                        var key_match = regex.exec(key)
                                        regex.lastIndex=0;
                                        if (key_match !=null){
                                                var fileName = key_match[1];
                                                var charSpaces = key_match[2];

                                                if(filenames.includes(fileName)){
                                                        var inpJSFile= fileData[fileName]

                                                        try {   
                                                                var spaces = charSpaces.split(":")
                                                                key = key.replace(charSpaces,lineSpaces(spaces[1],inpJSFile)+":"+spaces[1])
                                                        }
                                                        catch (e) {
                                                                console.log("FG Formatting issues :" + key)
                                                        }
                                                }
                                        }
                                }
                                StatFlowOut[key] = []
                                
                                for (var val of values) {
                                        /*if(val === "Callee(/Users/madhurimachakraborty/Documents/jalangi2/experiments/trex/ft_applycall.js@10:96-144)"){
                                                console.log("reached")
                                        }*/
                                        if(!(val.includes("prologue.js"))){// || val.includes("%ssa_val")
                                        if (val.startsWith("LexVar")){
                                                var val_match = regex2.exec(val)
                                                regex2.lastIndex=0;
                                                if (val_match){
                                                        //new to avoid changes to $$
                                                        //val = val.replace(val_match[0],"(/"+val_match[0].split("//").slice(-1))
                                                        val = "LexVar"+"(/"+val_match[0].split("//").slice(-1)
                                                        val= val.split("LexVar(/(L").join("LexVar(")
                                                        
                                                         //new lexvar in form /fcn/fcn
                                                        var multFun = val.split(".js").slice(-1)[0]
                                                        //major experimental change
                                                        if(multFun.split("/").length>2){
                                                                //console.log(val)
                                                                val = val.replace(multFun,multFun.split("/").slice(0)[0]+"/"+multFun.split("/").slice(-1)[0])
                                                                //val = multFun.split("/").slice(-1)[0]

                                                                //val = val.replace(multFun
                                                        } 
                                                        if(val.includes(":")){
                                                                var val_match2 = regex2.exec(val)
                                                                regex2.lastIndex=0;
                                                                if(val_match2){
                                                                        val = val.replace(val_match2[1],val_match2[1].split(":").slice(0,1))
                                                                }
                                                        }
                                                }
                                        }
                                        else{

                                                var val_match = regex.exec(val)
                                                regex.lastIndex=0;
                                                /**/
                                                if (val_match !=null){
                                                        var fileName = val_match[1];
                                                        var charSpaces = val_match[2];
                                                        if(filenames.includes(fileName)){
                                                                if (!fileData[fileName]){              
                                                                        fileData[fileName] = fs.readFileSync(fileName).toString().split("\n");
                                                                }
                                                                var inpJSFile= fileData[fileName]
        
                                                                try {   
                                                                        var spaces = charSpaces.split(":")
                                                                        val = val.replace(charSpaces,lineSpaces(spaces[1],inpJSFile)+":"+spaces[1])
                                                                }
                                                                catch (e) {
                                                                        console.log("FG Formatting issues :" + val)
                                                                }
                                                        }
                                                }
                                        }
                                        StatFlowOut[key].push(val)
                                }
                        }
                }
        } 

        for (var key of Object.keys(StatFlowOut)) {
                if(StatFlowOut[key].length === 0){
                        delete StatFlowOut[key];
                }
        }
        /*for (var key of Object.keys(StatFlow)) {
                if(key.includes(regex)){
                        StatFlowOut[key] = []
                        values = StatFlow[key]
                        for (var val of values) {
                                StatFlowOut[key].push(val)
                        }
                }
        }*/
        /*fs.writeFile(process.argv[2].replace(".json","_EDIT.json"),JSON.stringify(StatFlowOut,null,2),function(err) {
                if(err) console.log('error', err);
        });*/
        return StatFlowOut;
}
function readJSFiles(dir) {
        // Reading the javascript files to format the dynamic callgraph

        fs.readdirSync(dir).forEach( f => {
                let dirPath = path.join(dir, f);
                let isDirectory = fs.statSync(dirPath).isDirectory();
                if (isDirectory){ 
                        readJSFiles(dirPath)
                }
              else{
                  if(f.endsWith('.js')){
                  var filePath = path.join(dir, f);
                  filenames.push(filePath);
                  }
                }
              });
}
//postprocess()
function lineSpaces(chars, inpJSFile) {
        // Calculating the line given the char spaces
        
        var cnt = 0;
        startend = chars.split("-")
        for (var j = 0; j < inpJSFile.length; j++) {
                cnt += inpJSFile[j].length + 1;
                if(startend[0]<cnt)
                {       
                        return j+1;
                }
        }
        return j;
}
module.exports={
        post_prcs
      }
