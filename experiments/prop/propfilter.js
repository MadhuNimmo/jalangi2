function foo(){
        var obj = {
                toString : function(){ return "filtering"}
        }

        obj.toString();
}
var arr = [1,2,3]
arr.toString()
foo()
