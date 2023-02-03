(function(){
        var obj1 = {
                foo : function(y){ 
                        return y
                }
        }
        var obj2 = {
                foo : function(){ 
                        return "obj2foo" 
                }
        }
        var x = obj1.foo
        x();
})()
//here signature based filtering would not help
//as foo@8 and foo@3 have same signatures