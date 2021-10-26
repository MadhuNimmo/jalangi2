(function () {
        function foo() {
                return {log: 'log',getlog: new Function("with(this) { return log;}")}
        }
        var x = foo();
        x.getlog()
})();
      