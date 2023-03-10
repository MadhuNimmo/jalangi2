(function(){
var strats= {}
var options= {}
var defaultStrat = function (parentVal, childVal) {
        return childVal === undefined
          ? parentVal
          : childVal
};
function mergeField (key) {
        var strat = strats[key] || defaultStrat;
        options[key] = strat("x", "y", "z");
}
mergeField();
})()