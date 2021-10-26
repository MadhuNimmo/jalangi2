(function(){
var func = new Function("return " + "function () { return 'xyz'; }")();
func()
})()

