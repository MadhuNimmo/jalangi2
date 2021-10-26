const fs = require('fs');
xarr = fs.readFileSync(process.argv[2]).toString().split("\n");
yarr={}
//console.log(xarr[xarr.length-1])
for (i = 0; i < xarr.length; i++){
        callee=xarr[i].split(" -> ")[1];
        if (!(callee in yarr)){
                yarr[callee]=xarr[i];
        }

      }
//console.log(Object.keys(yarr).length)
output=[]
for (key in yarr){
        output.push(yarr[key])
}
//console.log(output.join("\n"))
//fs.writeFileSync("inDynamicUniqCallee.txt",output.join("\n"));
zarr={}
cnt=0
for (i = 0; i < output.length; i++){
              caller=output[i].split(" -> ")[0];
              if (!(caller in zarr)){
                      zarr[caller]=output[i]
              }
      
            }
//console.log(zarr.length);
output2=[]
for (key in zarr){
        output2.push(zarr[key])
}
//console.log(output2.length);
fs.writeFileSync("inDynamicNatUniq.txt",output2.join("\n"));
/*for (i = 0; i < 1; i++){
        regex_pattern = xarr[i].match(/((\S)+)\s\((((\S)+)\@(([0-9]+\:[0-9]+\-[0-9]+))|(undefined))\)\s(\-\>)\s((\S)+)\s\(((\S)+)\@([0-9]+\:[0-9]+\-[0-9]+)\)/g);
        if (regex_pattern==null){
                cnt+1
        }

}
console.log(cnt)*/