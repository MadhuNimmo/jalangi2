(function(){
        var obj= {
                MyName:function(){
                        return "Nimmo"
                },
                MyPhone:function(){
                        return "XXX-XXX-XXXX"
                }
        }
        function foo(x){
                return obj[x]
        }
        foo("My"+"Phone")()
        
})()