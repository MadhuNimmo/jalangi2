(function(){
        var obj= {
                foo: function (){return true},
                bar: function (){return true},
        }
        
        obj["foo" || ""].apply(this)
})()