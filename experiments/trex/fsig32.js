(function(){
        function sayHello() {
                return function(){
                        return('Hi '+this.name);
                }
      }
      
      var person1 = {
        name: 'John'
      };
      
      var person2 = {
        name: 'Sarah'
      };
      
      // call sayHello() function with person1 as the "this" keyword
      var x = sayHello.call(person1); // output: "Hello, John!"
      x();
})()