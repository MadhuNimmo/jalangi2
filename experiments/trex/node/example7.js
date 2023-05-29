function foo(x,y = function(){return "quo"}) {  //1
        return y; 
}
function bar(){  //2
        return "bar";
}
function dave(){  //2
        return "dave";
}
var y = foo(dave);
y();