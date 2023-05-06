(function(){var points = [40, 100, 1, 5, 25, 10];

// Sort the numbers in ascending order
points.sort(function(a, b){return a-b});

var lowest = points[0];

var foo = function(){ return "foo" };
foo();
function bar(){ return "bar" };
(function(){ return "dave" })();
bar();
})()