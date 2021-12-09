(function () {
  var obj = {
    MyName: function () {
      return "XYZ";
    },
  };
  function foo(tuples) {
    obj[tuples[1][1]] = function () {
      return "XXX-XXX-XXXX";
    };
  }

  foo([["MyName", "ok"],["ok", "MyPhone"]]);
  obj["MyPhone"]();
})();
