(function(){
        var render;
        var obj = {}
        obj["xyz"]=function(){return 2}
        render= obj["x"+"yz"]
        render()
        function foo(){
                render()
        }
        foo()
})()