(function(argName){
        var obj = {
                propA :  function(){
                        return "prop A"
                }
        }
        obj[argName]()
})("propA")