(function(){
        var obj= {
                MyName:function(func){
                        func();
                        return;//"John Doe"
                },
                MyPhone:function(){
                        return "XXX"
                },
                MyAddress:function(){
                        return "Riverside"
                }
        }
        var fun = obj["MyPhone"]
        obj["My"+"Name"](fun);
})()
