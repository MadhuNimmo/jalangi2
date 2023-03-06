var obj = {}
function setPropName(name){
        obj[name] = function(){ return "xyz"}
        obj.address = function(){ return "101"}
}
setPropName("xyz")
obj.xyz();
obj.address();
// line5-> line2 call missed in SCG