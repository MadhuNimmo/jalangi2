(function () {
        var arr = {
        "abc" : function(){
                return "1";
        },
        "xyz" : function(){
                return "2";
        }
        };
        /*for(var key in arr){
                arr[key]();
        }
        for(var i=0; i< arr.length; i++){
                arr[i]();
        }*/

        var y = "bc"
        arr["a"+ y]()
        var z = "a"
        arr[z+ "bc"]()
        arr[z+y]()
        arr["a"+"bc"]()

})();
      