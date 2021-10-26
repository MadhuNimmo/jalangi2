(function(){
var arrayOfFunction = [ 
        function() { 
                console.log("Inside First function"); 
        }, 
        
        function() { 
                console.log("Inside Second function"); 
        }, 
        
        function() { 
                console.log("Inside Third function"); 
        }	 
] 
function foo(){
        //var object={}
        for (var argsIndex = 0; argsIndex < arguments.length; argsIndex++) {
                var iterable = arguments[argsIndex];
                if (iterable) {
                        for (var key in iterable) {
                                if (typeof iterable[key] == 'function') {
                                        iterable[key]();
                                }
                        }
                }
        }
}
foo(arrayOfFunction)
})()