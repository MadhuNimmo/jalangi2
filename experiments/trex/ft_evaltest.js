(function(){
        var x = new Function('return "x"');
        var obj={}
        obj["xyz"] = x;
        obj["x"+"yz"]()
})()
