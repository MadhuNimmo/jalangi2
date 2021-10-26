function gen(){
        function func(){
                return "done"
        }
        return func;
}function x(){
        return "x";
}
function y(inp){
        var next = inp==="abc"? x : gen()
        return next();
}
y("ABC")

var obj={}
obj["abc"] = function(a){
        a()
        return function(){}
}
var x  = obj["ab"+"c"]("y")
x();

