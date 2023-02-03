(function(){
        var obj1 = {
                foo : function(y){ 
                        return y;
                }
        }
        var obj2 = {
                foo : function(){ 
                        return "obj2foo" 
                }
        }
        obj1.foo();
})()
//here signature based filtering would give wrong result
//as it would assume call from 12 to foo@8 as both do not take any
//args