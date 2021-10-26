var esp = require('esprima');
const fs = require('fs');
var code = fs.readFileSync(process.argv[2]).toString();
var syntax = esp.parse(code);
var funcs = {};

(syntax.body).forEach(function(i) {
        if (i.type == 'ExpressionStatement' && i.expression.type == 'CallExpression' && i.expression.callee.name!=undefined) {
            funcs['global'] = funcs['global'] || [];
            funcs['global'].push(i.expression.callee.name);
        }
    if (i.type == 'FunctionDeclaration') {
        var name= i.id.name?i.id.name:'global';
        (i.body.body).forEach(function(j) {
            if (j.type == 'ExpressionStatement' && j.expression.type == 'CallExpression' && j.expression.callee.name!=undefined) {
                funcs[name] = funcs[name] || [];
                funcs[name].push(j.expression.callee.name);
            }
        });
    }
});

console.log(funcs);