(function(){
  var names = ["a","b","c","d"]
  var action="act"
  var rest = "xxx"
  /*for (var i = 0, l = names.length; i < l; i++) {
          obj[action].apply(obj, [names[i]].concat(rest));
        }*/
  var obj = undefined
  var val = obj[action].apply(obj,"xyz")
})()