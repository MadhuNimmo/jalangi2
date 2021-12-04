var obj = {"xyz": function(){return 'xyz'}}
function bar(){
        var abc = obj['xy'+'z']
        abc.call(this)
}
bar()