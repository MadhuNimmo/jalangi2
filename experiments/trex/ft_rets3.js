(function(){
        var obj={
        foo: function(){ return obj["bar"]},
        bar: function(){
                return function foo3(){ return;
                };
        }
        }
var x = obj["fo"+"o"]();
y=x()
y();
})()