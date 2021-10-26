var escope = require('escope');
var esprima = require('esprima');
var estraverse = require('estraverse');
const fs = require('fs');

var code = fs.readFileSync(process.argv[1], 'utf8')
var ast = esprima.parse(code);
var scopeManager = escope.analyze(ast);

var currentScope = scopeManager.acquire(ast);   // global scope
var out = {}
estraverse.traverse(ast, {
    enter: function(node, parent) {
        // do stuff
        
        if (/Function/.test(node.type)) {
            currentScope = scopeManager.acquire(node);  // get current function scope
            out["node"] = currentScope
        }
    },
    leave: function(node, parent) {
        if (/Function/.test(node.type)) {
            currentScope = currentScope.upper;  // set to parent scope
        }
        
        // do stuff

    }
});
console.log(out)