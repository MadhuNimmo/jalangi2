(function (arr) {
  var obj = arr[0],
    y = 0;
  var def = ["ok"];
  var newObj = {};
  newObj[def[0] + "With"] = obj.MyPhone;
  newObj["okWith"]();
})([
  {
    MyName: function () {
      return "XYZ";
    },
    MyPhone: function () {
      return "XXX-XXX-XXXX";
    },
  },
]);
