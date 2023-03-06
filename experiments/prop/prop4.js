var obj = {}
function ensure(obj, name, factory) {
        return obj[name] = factory();
}
function bar(){
        return "x";
}
function foo(){
        return bar;
}
ensure(obj,"xyz",foo)
obj.xyz()

// line12-> line5 call missed in SCG