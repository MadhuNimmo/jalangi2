(function(){
var xyz = ['yes',['no',function(){return}]]
function bar(x1,y1){
        var controllers={}
        controllers[x1]=y1
        controllers[x1]()
}
bar.call(this,xyz[1])
})()