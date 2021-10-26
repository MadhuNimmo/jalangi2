(function(){
        var obj= {
                MyName:function(func){
                        return obj["MyPhone"];//"John Doe"
                },
                MyPhone:function(){
                        return obj["MyAddress"];
                },
                MyAddress:function(){
                        return "Riverside"
                }
        }
        //var fun = obj["MyPhone"]
        var x =obj["My"+"Name"]()
        x()();
})()