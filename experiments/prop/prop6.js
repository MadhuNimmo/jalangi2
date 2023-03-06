function runInvokeQueue(queue) {
        var i, ii;
        for (i = 0, ii = 3; i < ii; i++) {
          var invokeArgs = queue[i],
              provider = {
                "x": function(){return "x"},
                "y": function(){return "y"},
                "z": function(){return "z"}
        
              }
          provider[invokeArgs]();
        }
}
runInvokeQueue(["x","y","z"])

// line11-> line6/7/8 call missed in SCG