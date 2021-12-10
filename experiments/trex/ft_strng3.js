(function(){
        var obj= {}
        obj["MyName"]= function(){
                        var xyz = "MyPhone"
                        return "XYZ"
                }
        obj["MyPhone"]= function(){
                        return "XXX"
                }
        for(var key in obj){
                        obj[key]()
        }
})()