(function(){
        function foo(x,y){
                arguments[0]()
                var arr = [].push("something");
                dave()
        }
        function bar(){
                return "bar"
        }
        function dave(){
                return "dave"
        }
        foo(bar,dave)
})()