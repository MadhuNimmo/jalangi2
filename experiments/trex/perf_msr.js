const {performance} = require("perf_hooks")
var propRegex = /Prop\((.+)\)/gi///Prop\((\S+)\)/gi
var x = "Prop(jkagflusdghfjk.hsdkjfhjk.sdf)"
var t0 = performance.now()
if(x.startsWith("Prop(")){
var y = x.substring(5,x.length-1)
}
var t1 = performance.now()
console.log(t1-t0)
var t2 = performance.now()
if(x.startsWith("Prop(")){
        var ret_src = propRegex.exec(x);
        propRegex.lastIndex=0;
        var z = ret_src[1]
}
var t3 = performance.now()
console.log(t3-t2)
console.log(y,z)

