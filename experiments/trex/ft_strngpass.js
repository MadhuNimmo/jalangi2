(function(){
        var obj= [
                MyName,
                function(){
                        return "Nimmo"
                }
        ]
        function foo(x,y,z){
                //var y = "MyName"
                return x();
        }
        
        for(var item in obj){
                if (obj.hasOwnProperty(item)) {
                        foo.call(this,obj[item],item,obj)
                }
                //foo(obj["MyName"])
        }
        
})()