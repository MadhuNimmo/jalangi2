(function(){
        var student = {
        firstName: function(){ return 'Monica'},
        set getName(val) {
          return this.firstName=val;
        }
      
      }; 
      student.getName = function(){ return 'Rachel'};
})()



/*(function(){
        function foo(params){
                var params =[]
                params.push("return 3")
                return Function.apply(this,params)
        }
        foo().call(this)
})()*/