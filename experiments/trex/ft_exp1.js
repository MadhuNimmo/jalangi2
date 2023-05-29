function foo(x) { //1
    return x; 
}
function bar(){ //2
    return dave; 
}
function dave(){ //3
    return; 
}
var y = foo(bar);
var z = y();
z();