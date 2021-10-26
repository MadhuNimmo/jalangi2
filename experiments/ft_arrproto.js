var arr = [1,2,3] 
Array.prototype.forEach.call(arr, function(val){
        return function(){ return val}();
})