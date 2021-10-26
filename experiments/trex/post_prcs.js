
const fs = require('fs');

function postprocess(){
        var StatFlow = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
        var StatFlowOut = {}
        fileIdentifier = process.argv[3].endsWith("/")?(process.argv[3].split("/").slice(-2)):(process.argv[3].split("/").slice(-1))
        fileIdentifier = fileIdentifier[0]
        for (var key of Object.keys(StatFlow)) {
                        if(!(key.includes("prologue.js"))){
                                values = StatFlow[key]
                                StatFlowOut[key] = []
                                
                                for (var val of values) {
                                        if(!(val.includes("prologue.js"))){
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
        fs.writeFile(process.argv[2].replace(".json","_EDIT.json"),JSON.stringify(StatFlowOut,null,2),function(err) {
                if(err) console.log('error', err);
        });
}
postprocess()
