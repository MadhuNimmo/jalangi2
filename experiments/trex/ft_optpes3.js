(function(){
var off = [function(){return "b"},function(){return "a"}]
var on = [function(){return "abc"}]
function bar(key){
        on.push(function(){return "xyz"})
        on[key].apply(this)
}
bar(arguments[0])
})(1)