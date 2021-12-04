(function(){
        var render = new Function("return 5");
        function foo(data){
                return render.call(this,data);
        }
        foo()
})()