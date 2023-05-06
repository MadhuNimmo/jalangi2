(function(){
        function sayHello(arg1) {
        if(arg1){
                return function(){
                        return('Hello '+this.name);
                }
        }else{
                return function(){
                        return('Hi '+this.name);
                }
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
      // call sayHello() function with person2 as the "this" keyword
      var x2 = sayHello.call(person2,"okay"); // output: "Hello, Sarah!"
      x2();
})()