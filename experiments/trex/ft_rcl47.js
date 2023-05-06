var myString = "hello world";

var myArray = Array.prototype.map.call(myString, function(char) {
  return char.toUpperCase();
});