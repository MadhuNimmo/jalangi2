(function () {
  var obj = {};
  function each(lst, fun) {
    for (var item in lst) {
      fun(lst[item]);
    }
  }
  each(arguments, function (name) {
    obj[name] = function () {
      return +"x";
    };
  });
  obj.MyPhone();
})("MyHobby", "MyPhone");
