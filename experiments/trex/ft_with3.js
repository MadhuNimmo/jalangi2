(function () {
        function x(){ return true}
        function foo() {
                return {log: 'log',getlog: new Function("with(this) { if(x()){return log;}}")}
        }
        var y = foo();
        y.getlog()
})();
      