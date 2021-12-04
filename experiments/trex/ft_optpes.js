(function(){
        var obj={}
        function foo(){
                return function(){return "xyz"}
        }
        function bar(key){
                obj.abc = foo()
                obj.abc();
        }
        bar("abc")
})()