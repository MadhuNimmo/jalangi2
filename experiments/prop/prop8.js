var obj = {"xyz" : function(){ return "xyz"}}
function foo(){return "xyz"} 
function bar(){return "abc"} 
var name = "xyz"
xyz = obj.hasOwnProperty(name)? foo(): bar()
obj[xyz]();

// line6-> line1 call missed in SCG