(function(){
function foo(x){ 
        return x.apply(this);
}
function bar(){ 
        return;
}
foo.call(this,bar);
})()