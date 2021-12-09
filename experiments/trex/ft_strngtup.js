(function () {
  var obj = {
    MyName: function () {
      return "Nimmo";
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
