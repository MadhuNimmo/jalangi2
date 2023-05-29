function foo(x) {  //1
        return bar(x); 
}
function bar(y){  //2
        return y(); 
}
function dave(){  //3
        return "dave";
}
var y = foo(dave);
var y = foo(dave);