function foo(x) {  //1
        return x; 
}
function bar(){  //2
        return "bar";
}
function dave(){  //2
        return "dave";
}
var y = foo(dave,bar);
y();