obj={
        foo: function() { 
        return; 
        }
}
var x = obj["foo"];
var y = obj["fo"+"o"];
x();
y();