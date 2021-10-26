const fs = require('fs');
var obj1 = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
var obj2 =JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
const clonedeep = require('lodash.clonedeep')

DCG1_keys = [...Object.keys(obj1)]
DCG2_keys = [...Object.keys(obj2)]
var Mis_edges = clonedeep(obj1)
/*for (var DCG1_key of DCG1_keys) {
        for (var DCG2_key of DCG2_keys) {
                if (DCG1_key==DCG2_key || DCG1_key.includes(DCG2_key)) {
                        var DCG1_values = obj1[DCG1_key];
                        for (var DCG1_value of DCG1_values) {
                                var DCG2_values = obj2[DCG2_key]
                                for (var DCG2_value of DCG2_values) {
                                        if (DCG1_value==DCG2_value || DCG1_value.includes(DCG2_value)){
                                                        var index = Mis_edges[DCG1_key].indexOf(DCG1_value);
                                                        if (index !== -1) {
                                                        Mis_edges[DCG1_key].splice(index,1);
                                                        }
                                                        if(Mis_edges[DCG1_key].length==0){
                                                                delete Mis_edges[DCG1_key]
                                                        }
                                        }
                                }
                        }
                                
                }
        }
}*/
for (var DCG1_key of DCG1_keys) {
        if(!(DCG2_keys.includes(DCG1_key))){
              for(var chld in )  
        }
        else{

        }
}
//console.log(Mis_edges)