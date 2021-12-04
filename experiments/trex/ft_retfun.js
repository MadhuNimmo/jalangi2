(function () {
  function foo() {
    return function b() { return;};
  }
  var qoute = foo();
  function bar(){
  qoute();
  }
  bar();
})();
