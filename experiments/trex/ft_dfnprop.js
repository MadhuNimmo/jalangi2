(function(){
        var o = {};
        Object.defineProperty(o, 'a', {
        get: function(){ return "1"} ,  
        configurable: false
        });
        Object.defineProperty(o, 'b', {
        get: function(){ return "2"},
        configurable: false
        });
        var obj = {
                enumerable: true,
                configurable: true,
              };
        obj.get = function(){return "get"}
        console.log(obj);
})()