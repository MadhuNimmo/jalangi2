(function(){
        var obj= {
                MyName:function(){
                        return "XYZ"
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
        var retAddress = function(x){
                return "MyAddress"
        }
        //var xyz= retAddress();
        //obj[xyz](); //Interprocedural
        obj[retAddress()](); //Interprocedural
        //obj["MyAddress"](); 

})()