(function(){
        var obj= {
                MyName:function(){
                        return "XYZ"
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