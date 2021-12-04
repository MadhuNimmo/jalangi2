(function(){
var test = {
prop: function prop() {
return 42;
},
func: function func() {
        var target = this
        target.prop();
}
};
test.func();
})()