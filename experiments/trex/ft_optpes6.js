(function(){
var target = null
function bar(){ return "x"}
function foo(){ return bar}
target = foo() 
target()
})()