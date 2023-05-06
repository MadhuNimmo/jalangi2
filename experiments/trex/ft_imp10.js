(function(){
var sum = new Function('return 2');
const numberRegex = new RegExp("\\d+");

// Testing the regex against a string
const testString = "I have 3 apples and 2 oranges.";
const result = numberRegex.test(testString);

sum(2, 6);
})()