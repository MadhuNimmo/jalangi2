const fs = require('fs');
var obj1 = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
var obj2 = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));

var keys2 = Object.keys(obj1)
//console.log(keys2[0])
var cnt=0
for(item in obj2){
        if (!(keys2.includes(obj2[item].slice(0,4).toString()))){
                console.log(obj2[item])
        }
        cnt+=1
}
//console.log(cnt)