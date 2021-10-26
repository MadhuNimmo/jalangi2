(function(){
        var arrayOfFunction = {
                "fun1":function() { 
                        console.log("Inside First function"); 
                }, 
                
                "fun2":function() { 
                        console.log("Inside Second function"); 
                }, 
                
                "fun3":function() { 
                        console.log("Inside Third function"); 
                },
                "fun4":"fun3"
        }
        function foo(){
                arguments[0]()
                //x()
                
        }
        foo(arrayOfFunction["fun1"])
        })()