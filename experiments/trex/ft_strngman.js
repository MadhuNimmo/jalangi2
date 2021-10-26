(function(){
        var str="MyNames"
        var obj= {
                MyName:function(){
                        return "Nimmo"
                },
                MyPhone:function(){
                        return "XXX-XXX-XXXX"
                },
                MyAddress:function(){
                        return "Riverside"
                },
                MyHobby:function(){
                        return MyAddress
                }
        }
        var x = obj["My"+"Phone"]; //String manipulation //str.substring(0, str.length-1)
        //var y = "My"+"Phone"; //String manipulation 
        //var z=y
        //obj[z]();
        x();
})()