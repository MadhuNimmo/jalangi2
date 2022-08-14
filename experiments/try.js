var {flowRead} = require('./flowRead');
const fs = require('fs');
// const { mainModule } = require('process');

var trace = JSON.parse(fs.readFileSync("/Users/madhurimachakraborty/Documents/DynTraces/todo_angularjs_trace.json"))

var mismatches = JSON.parse(fs.readFileSync("/Users/madhurimachakraborty/Documents/DynTraces/DCGs/todo_angularjs_DCG.json"))

var input = "/Users/madhurimachakraborty/Documents/todomvc-master/examples/angularjs/"

var arr = flowRead(mismatches, trace, input)

// to check if there are any traces with actual flow of the function
for (let i = 0; i < arr.length; i++) {
    if (arr[i].trace.length > 1) {
        console.log(arr[i])
    }
}