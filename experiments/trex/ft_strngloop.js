(function(){
        function foo(x){
        var obj= {
                MyPhone:function(){
                        return "XXX-XXX-XXXX"
                },
                MyAddress:function(){
                        return "Riverside"
                }
        }
        obj[x] = function(){
                return "XYZ"
        }
        obj['My'+'Hobby'] = function(){
                return "Nothing"
        }
        obj[x]()
        }
        var arr = ["MyName","MyHobby"]
        //var ob = {"name":"MyName","address":"MyAddress"}
        /*for(var item of arr){
                obj[item]()//for of does not work, for in does??
        }*/
        /*for(var key in arr){
                obj[arr[key]]()//works
        }*/
        /*for(var i=0;i<arr.length;i++){
                obj[arr[i]]()
        }*/
        /*var arr2= ["MyCountry"]
        for(var item of arr2){
                obj[item]=function(){
                        return "India"
                }
        }
        obj["MyCountry"]();*/
        for(var item in arr){
                foo(arr[item])//for of does not work, for in does??
        }

})()