(function(){
        var obj={}
        obj["xyz"] = function(){ return "X"}
        var y = obj["x"+"yz"]
        var x = new Function("return " + y);
        console.log(x()())
})()