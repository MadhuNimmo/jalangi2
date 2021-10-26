const fs = require('fs');
var dyncallGraph;
var dyncallGraphMod={};
var filename="";

function postprcs(dyncallGraph){
        for(var key of Object.keys(dyncallGraph)){
                if(key.startsWith("cache/todomvc.com/")){
                        dyncallGraphMod[key]=dyncallGraph[key]
                }
        }

var jsonString = JSON.stringify(dyncallGraphMod,null,4)
filename=(process.argv[2]).replace(/\.json/,"_edited.json");
fs.writeFileSync(filename, jsonString,function(err) {
        if(err) console.log('error', err);
});
}
function getInputs() {
        // Getting the inputs from console
        if (process.argv.length ===3) {
                dyncallGraph = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'))
                postprcs(dyncallGraph);
        }
        else {
                console.log("Please enter arguments in the following sequence:\n1:Dynamic Call graph File\n2:Static Call Graph File\n3:Directory of Javascript files\n4:Output Directory")
        }
}

getInputs()