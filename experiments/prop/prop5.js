var obj = {
        "x": function(){ return "x"},
        "y": function(){ return "y"},
        "z": function(){ return "z"}
}
function func(arg){
        for (var key in arg){
                obj[key]()
        }
}
func(obj)

// line8-> line2/3/4 call missed in SCG