(function(arr){
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
                        return "Nothing"
                }


        }
        //var arr = ["MyHobby"]
        //arr[1] = "MyPhone"
        //obj[arr[1]]() //Array element
        /*var obj = {MyPhone:function(){
                return "XXX-XXX-XXXX"
        }}*/
        //var ob = {"phn":"MyPhone","address":"MyAddress"}
        //var arr = ["MyPhone","MyAddress"]
        //var lst= arr[0]
        var x = obj.MyPhone
        //obj[arr[1]]() //It was string manipulation operation earlier but got updated to Array Access

        //obj[ob["address"]]() //object value*/
})()