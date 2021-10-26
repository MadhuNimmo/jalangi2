        (function(){
        var y = function(){ return obj["MyPhone"]}
        var obj= {
                MyName:function(fun){
                        return fun();
                },
                MyPhone:function(){
                        return function(){ return "nothing"}
                }
        }
        function foo(){
                return obj["My"+"Name"](y())
        }
        var x = foo();
        x();
        })()
