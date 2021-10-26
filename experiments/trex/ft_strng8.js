(function(){
        var obj= {
                MyName:function(func){
                        return "John Doe"
                },
                MyPhone:function(){
                        return "XXX"
                },
                MyAddress:function(){
                        return "Riverside"
                }
        }
        //var fun = obj["MyPhone"]
        var x =obj["My"+"Name"](obj["My"+"Phone"]())
        //x();
})()
/*(function(){
        var obj= {
                MyName:function(func){
                        return obj["MyPhone"];//"John Doe"
                },
                MyPhone:function(){
                        return "XX-XXX"
                },
                MyAddress:function(){
                        return "Riverside"
                },
                get name() {
                        return this.MyName;
                }
        }
        var x = obj["name"]
        x()();
})()*/