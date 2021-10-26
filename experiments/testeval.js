//var bar = function bar(){ return "foo"};
//new Function("return " + bar() )();
var foo = function () { return "foo"; };
var bar = new Function("return(" + foo + ")")();
bar();

