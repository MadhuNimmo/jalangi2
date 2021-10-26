var esprima = require('esprima');
var program = process.argv[2];

esprima.tokenize(program);

console.log(esprima.parse(program));