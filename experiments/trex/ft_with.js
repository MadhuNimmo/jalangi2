(function () {
  function foo() {
    return new Function(
      "with( {log: 'log',getlog: function () {return this.log;}}) { return getlog();}"
    );
  }
  var x = foo();
  x()
})();
