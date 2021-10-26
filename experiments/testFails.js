(function () {
  var z = function () {
    return "z";
  };
  function bar() {
    return new Function("return(" + z + ")");
  }
  var next = bar();
  var final = next();
  final();
})();
