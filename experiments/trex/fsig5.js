function outerFunction() {

        var innerFunction = function() {
          var argsArray = arguments[0][0]+arguments[0][1]+arguments[0][2];
          console.log(argsArray);
        }
      
        innerFunction(Array.from(arguments));
}
      
outerFunction('Hello', 'world!', 123);
      