(function () {
        var m = function() { return 2; } 
        var n = function() { return m();}// interesting call site 
        n();
        function main(){
          var x = function() { return 2; } 
          var y = function() { return x();}// interesting call site 
          y();
        }
        main();
      })();