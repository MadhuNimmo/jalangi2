(function(){
        var obj= {}
        obj["MyName"]= function(){
                        var xyz = "MyPhone"
                        return "Nimmo"
                }
        obj["MyPhone"]= function(){
                        return "XXX"
                }
        for(var key in obj){
                        obj[key]()
        }
})()