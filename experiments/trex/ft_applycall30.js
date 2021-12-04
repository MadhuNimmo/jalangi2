var obj={
foo: function(){return "foo"},
bar: function(){return "bar"}
}
function y(x){
x = x
x.apply(this)
}
y(obj["bar"])