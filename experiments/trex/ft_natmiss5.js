(function(args1){
var words = args1;
var result = words['fil'+'ter'](function (word) {
  return word.length > 6;
},this);
})(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']);
