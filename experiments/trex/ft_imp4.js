(function(){
        var obj = {foo: function(){ return "obj_foo"}}
        var obj2 = {
                foo : function(){
                        obj.foo();
                        return "foo";
                }
        }
        obj2.foo()
})()