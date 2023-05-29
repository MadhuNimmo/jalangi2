(function(){
        function foo(a,b,c){
                bar(a,b,c)
        }
        function bar(a,b,c){
                return a+b;
        }
        foo("a","b")
})()