var fs = require('fs');
var path = require('path');
var format = /(?!\()(\S+\.js)\:([0-9]+\:[0-9]+\:[0-9]+\:[0-9]+)\)/gi;
const out_path = process.argv[2];
const target = process.argv[2]//path.join(__dirname, '/' + process.argv[2]);
console.log("Target path: " + target);
console.log("Starting merge");

var merged_results = [];

function toObject(edge) {
    var newObj={}
    var typ = edge[0]
    var funName = edge[1]
    var identity = edge[2]
    var loc = formatLoc("norm",edge[3])
    var others = edge[4]
    newObj.typ = typ;
    newObj.funName = funName;
    newObj.identity = identity;
    newObj.loc = loc;
    if (typ=="InvokeReturn"){
        if(others!=null && others[0]["retLoc"]){
            others[0]["retLoc"] = formatLoc("ret",others[0]["retLoc"]);
        }
        newObj.ret = others;
    }
    else if (typ=="Get" || typ=="Getter"){
        newObj.from = others[0];
        newObj.comp = others[1];
    }
    else if (typ=="LocRead" || typ=="LexRead"){
        newObj.from = others[0];
        newObj.curr = others[1];
        newObj.eloc = formatLoc("eloc",others[2]);
    }
    else if (typ=="Write" || typ=="Declare"){
        newObj.to = others;
    }
    else if(typ=="Put" || typ=="Setter"){
        newObj.to = others[0];
        newObj.comp = others[1];
    }
    // return edge
    return newObj
}
function formatLoc(from,loc){
    try{
        var locIid = format.exec(loc);
        format.lastIndex = 0;
        return locIid[1].replace("(",":")+"@"+locIid[2];
      }
    catch(e){
        /*if(loc ==undefined){
            console.log("Unsupported format: "+ loc+ " at "+from)
        }else if(!loc.includes("@")){
            console.log("Unsupported format: "+ loc+ " at "+from)
        }*/
        return loc;
      }

}
const file_names = fs.readdirSync(target)
var len = 0
file_names.forEach(function (file) {
    if(file.endsWith(".txt")){
        const file_path = target + file;
        const parsedData = JSON.parse(fs.readFileSync(file_path));
        len+=parsedData.length
        for(edge of parsedData) {
            merged_results.push(toObject(edge));
        }
    }

})
console.log("end")
fs.writeFile(out_path+"/merged_results.json", JSON.stringify(merged_results, null, 2), (err) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(`Results have been output to ${out_path+"/merged_results.json"}`);
});