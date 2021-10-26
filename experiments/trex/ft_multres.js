(function(){
        var obj2={}
        var obj= {
                MyName:function(){
                        return "John Doe"
                },
                MyPhone:function(){
                        return "XXX"
                },
                MyAddress:function(){
                        return "Riverside"
                }
        }
        obj2["New"+"Address"]= obj["My"+"Address"] 
        obj2["NewAddress"]()
})()