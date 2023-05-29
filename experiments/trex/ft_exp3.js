function foo(x) { //1
        return x;  
}
function bar(){ //2
        return;  
}
var y = foo(bar);
y();