function foo() {
        return;
}

var arr = ["x","y"];

function main(obj,act) {
        act(obj,foo)
}
main(arr,function(o,f){
        var result={}
        result = o.forEach(function (element) {
                return result[element] = f;
        });
        return result;
});