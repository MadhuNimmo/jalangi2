(function(){var obj={
        foo: function(){return "foo"},
        bar: function(){return "bar"}
}
function y(){
obj["bar"].apply(this)
}
y()
})()
