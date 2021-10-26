(function(){
        var test = {
                prop: {typs:{
                        arr:[1,2],
                        str:""},
                        },
                func: function() {
                  var todos= this.prop.typs.arr
                  var x = todos.reduce(function (a, b) { return a + b}, 0)
                  /*return todos.filter(function(x){ 
                        switch (x){
                                case 1:
                                        return !1;
                                default:
                                        return true
                        }
                  },this);*/
                },
              };
              
        test.func();
})()