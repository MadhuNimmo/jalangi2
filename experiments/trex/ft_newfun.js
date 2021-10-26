//var reg = require('./ft_newreg.js');
/*(function(){
var str = Number(1);
var ob = {"a":"x"}
var obj = Object.keys(ob)
var x = new Function('return 2');
var z = "length" in Object(obj) && obj.length;
x();
var getPrototypeOf = Object.getPrototypeOf
var a = getPrototypeOf(obj);
//console.log("hey ya")
})()
*/
function y(){
        var str = Number(1);
        var x = new Function('return 2');
        x();
}
y();