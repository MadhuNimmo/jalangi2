function foo(q,func){
        func(q)
}
function bar(x){
        return x;
}
function quote(a,callee1){
        if(a === "callone"){
                foo(a,callee1);
        }else{
                foo2(a,foo,callee1);
        }
}
function foo2(q,func2,callee2){
        func2(q,callee2)
}
quote("callone",bar);
quote("calltwo",bar)