(function(){
        var obj= {
                MyName:function(){
                        return "John Doe"
                },
                MyPhone:function(){
                        return "XXX"
                }
        }
        /*var x = "MyName"
        var y=x
        obj[y]()*/
        var ob = {"name":"MyName","address":"MyAddress"}
        for(var key in ob){
                console.log(key)//works
        }
})()