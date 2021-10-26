
const fs = require('fs');
var regex = /\((\S+)\@[0-9]+\:([0-9]+\-[0-9]+(.*))/gi
var regex2 = /\((\S+)\,(.*)/gi
///\((\S+)\@[0-9]+\:([0-9]+\-[0-9]+)/gi


function postprocess(){
        var StatFlow = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
        var StatFlowOut = {}
        fileIdentifier = process.argv[3].endsWith("/")?(process.argv[3].split("/").slice(-2)):(process.argv[3].split("/").slice(-1))
        fileIdentifier = fileIdentifier[0]
        //no more processing
        //but lexvar may need some
        for (var key of Object.keys(StatFlow)) {
                //if(key.match(regex)){
                        if(!(key.includes("prologue.js"))){//|| key.includes("%ssa_val")
                                values = StatFlow[key]
                                /*if (key.startsWith("LexVar")){
                                        var key_match = key.match(regex2)
                                
                                        if (key_match && key.includes(fileIdentifier)){
                                                //key = key.replace(key_match[0],key_match[0].split("(")[0]+"("+fileIdentifier+key_match[0].split(fileIdentifier).slice(-1))
                                                key = key.replace(key_match[0],key_match[0].split("(")[0]+"("+key_match[0].split("/").slice(-1))

                                        }
                                }else{
                                        var key_match = key.match(regex)
                                        
                                        if (key_match && key.includes(fileIdentifier)){
                                                key = key.replace(key_match[0],key_match[0].split("(")[0]+"("+fileIdentifier+key_match[0].split(fileIdentifier).slice(-1))
                                        }
                                }*/
                                StatFlowOut[key] = []
                                
                                for (var val of values) {
                                        if(!(val.includes("prologue.js"))){// || val.includes("%ssa_val")
                                        /*if (val.startsWith("LexVar")){
                                                var val_match = val.match(regex2)
                                                if (val_match && val.includes(fileIdentifier)){
                                                        val = val.replace(val_match[0],val_match[0].split("(")[0]+"("+val_match[0].split("/").slice(-1))
                                                }
                                        }else{
                                                var val_match = val.match(regex)
                                                if (val_match && val.includes(fileIdentifier)){
                                                        val = val.replace(val_match[0],val_match[0].split("(")[0]+"("+fileIdentifier+val_match[0].split(fileIdentifier).slice(-1))
                                                }
                                        }*/
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
        fs.writeFile(process.argv[2].replace(".json","_EDIT.json"),JSON.stringify(StatFlowOut,null,2),function(err) {
                if(err) console.log('error', err);
        });
}
//postprocess()

module.exports={
        postprocess
      }
