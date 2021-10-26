(function(){
        var obj={}
        function forEach(lst,fun){
                for(var item in lst){
                        fun(lst[item])
                }

        }
        function createShortMethods(names) {
                forEach(arguments, function(name) {
                  obj[name] = function() {
                        return "something"
                  };
                });
              }
        createShortMethods("MyName","MyPhone")
})()