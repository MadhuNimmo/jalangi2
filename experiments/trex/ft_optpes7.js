(function(){
var array1 = [{'a':function(){return 'a'}}];
function foo(arr){
        arr.a()
}
foo(array1[0])
})()