(function (){
function bar() {
return function() {};
}
var p = { f: bar };
var q = p.f()
function foo() {
q();
}
foo();
})()