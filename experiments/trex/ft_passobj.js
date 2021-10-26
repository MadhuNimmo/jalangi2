(function () {
        var cur,fn;
        var obj ={
                f1: function(){return "f1"},
                f2: function(){return "f2"}
        };
        cur = obj["f"+"1"]
        function foo(){
                fn = cur
                cur= {}
                cur.fn = fn
                return cur.fn
        }
        foo()()
})();
      