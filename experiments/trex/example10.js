function foo(quote){ 
        return quote;
}
foo.call(this,"foo called");
function bar(){ 
        console.log("bar called");
}
bar.call(this,"foo2 called");