var sample = function () {
  return (function() {
    return function xyz(){return;}
  })();
}

x = sample();

var sample2 = function () {
  return (function xyz() {
    return("something")
  });
}

y = sample2();