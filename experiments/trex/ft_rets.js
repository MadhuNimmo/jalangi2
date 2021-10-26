var obj ={
        z1: function (){return "done"},
        x1:function (){return y1()}
}
var arr=["z1","x1"]
function y1(){return obj[arr[0]]()}
function w1(){return obj[arr[1]]()}
var x= y1();