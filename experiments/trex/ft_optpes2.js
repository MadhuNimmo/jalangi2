(function() {
        var obj={};
        obj.abc = function() { return "xyz"}
        obj.def = function(p) {
            p(); // call site of interest
        }
        obj.def(obj.abc);
})()