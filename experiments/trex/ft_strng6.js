(function(){
        var obj= {
                MyName:function(func){
                        return obj["MyPhone"];//"John Doe"
                },
                MyPhone:function(){
                        return "XXX"
                },
                MyAddress:function(){
                        return "Riverside"
                }
        }
        //var fun = obj["MyPhone"]
        var x =obj["MyName"]
        var y = x()
        y();
})()