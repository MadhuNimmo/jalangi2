(function(){
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
                        return "Nothing"
                }


        }
        /*var retAddress = function(x){
                return "MyAddress"
        }
        var xyz= retAddress();
        var arr = ["MyHobby","MyPhone"]
        var ob = {"name":"MyName","address":"MyAddress"}
        var x = obj["My"+"Name"]; //String manipulation
        var y = "My"+"Phone"; //String manipulation False Positive 
        var z=y
        obj[z]();*/// this strategy works as long as we dont track reads/writes just manipulations
        //Will not be an issue unless the path is missing for altogether different reasons
        var arr=["MyAddress","MyHobby","MyName"]
        var x =obj[arr[0]];
        x();
        var y =obj[arr[1]];
        y();
        var z =obj[arr[2]];
        z();
        obj["MyAddress"]()
        /*var x =obj["My"+"Hobby"];
        x();
        var y =obj["MyAddress"];
        y();
        var z =obj["My"+"Name"];
        z();*/
        /*obj[retAddress()](); //Interprocedural
        obj[xyz]();
        obj[arr[0]]() //Array element
        obj[arr[1]]() //It was string manipulation operation earlier but got updated to Array Access
        obj[ob.name]() //object value
        obj[ob["address"]]() //object value
        for(var item of arr){
                obj[item]()//for of does not work, for in does??
        }
        for(var key in ob){
                obj[ob[key]]()//works
        }
        var arr2= ["MyCountry"]
        for(var item of arr2){
                obj[item]=function(){
                        return "India"
                }
        }
        obj["MyCountry"]();*///does not work*/
        // sfu
        /*get-> var - read
        get->get
        var->get - write*/

})()