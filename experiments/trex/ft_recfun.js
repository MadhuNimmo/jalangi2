(function () {
  function foo(arg) {
    if (arg == "x") {
      return foo();
    } else {
      return bar;
    }
  }
  function bar() {
    return;
  }
  var next = foo("x");
})();
