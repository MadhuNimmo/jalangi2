(function(){
var obj={}
function propCreate(name) {
        obj[name] = function() { return "ok"};
                
    };
var arr=["x","y"]
for (var item in arr){
        propCreate(arr[item]);
}

obj["x"]();
})()