(function(){
var array1 = ['a',function(){return 'a'}];
var array2 = array1.filter(function(element){ return typeof element === 'function'});
array2[0]()
})()