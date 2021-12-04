(function(){
function foo(){ 
        return //bar.apply(this);
}
function bar(){ 
        return foo;
}
/*foo.call(this);
function quote(){ 
        return;
}*/
var yuo = bar();
yuo.call(this)

foo()
})()