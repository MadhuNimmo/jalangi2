var obj = {
        "x": function(){ return "x"},
        "y": function(){ return "y"},
        "z": function(){ return "z"}
}
function callerFun(fun){
        fun();
}
for (var key in obj){
        callerFun(obj[key])
}

// line7-> line2/3/4 call missed in SCG