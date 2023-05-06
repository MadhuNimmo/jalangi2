(function(){
        function foo() {
                var dave = function(){}
                dave()
                bar();
                function bar() { }
        }
foo()
})()