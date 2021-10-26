(function(){function Person(first, last, age, eyecolor) {
        this.firstName = first;
        this.lastName = last;
      }
      function foo(x){
                Person.prototype[x] = function() {
                        return this.firstName + " " + this.lastName;
                };
        }
      foo("name")
      var myFather = new Person("John", "Doe", 50, "blue");
      myFather.name()

})()