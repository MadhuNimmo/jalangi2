const { Console } = require('console');
const fs = require('fs');
//var filename="/Users/madhurimachakraborty/Documents/JuiceShop_results/diff.json"
var filename="/Users/madhurimachakraborty/Documents/todomvcResults_natModPes/todo_angularjs/diff.json"
var DCG = JSON.parse(fs.readFileSync(filename, 'utf8'));
var callers = {}
var uni_callers = 0
var callee = {}
var uni_callees = 0
var total_edges = 0
var max_caller = []
var max_calls = 0;
for (var key of Object.keys(DCG)) {
        if (!(key in callers)){
                callers[key]=0
                uni_callers+=1
        }
        callers[key]+=1
        for(var val of DCG[key]){
                if (!(val in callee)){
                        callee[val]=0
                        uni_callees+=1
                }
                callee[val]+=1
                total_edges+=1
        }
        if(DCG[key].length > max_calls){
                max_calls = DCG[key].length
        }
}
//var max = 0;

for(var key of Object.keys(DCG)){
        if(DCG[key].length === max_calls){
                max_caller.push(key)
        }
}

var max_callees=[]
var max_called = 0;

for(var key of Object.keys(callee)){
        if(callee[key] > max_called){
                max_called = callee[key]
        }
}

for(var key of Object.keys(callee)){
        if(callee[key] === max_called){
                max_callees.push(key)
        }
}

console.log("Maximum calls have been made from the caller :")
console.log(max_caller,max_calls)
console.log("Maximum calls have been made to the callee :")
console.log(max_callees,max_called)
console.log("-----")
console.log("Number of unique callers : ",uni_callers)
console.log("Number of unique callees : ",uni_callees)
console.log("Total no of missed calls : ",total_edges)