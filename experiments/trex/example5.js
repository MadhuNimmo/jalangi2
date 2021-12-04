function foo(){
    //console.log("foo called");
    return function foo2(){
      //console.log("foo2 called");
      return function foo3(){
        //console.log("foo3 called");
      };
    }();
  }
foo()();
var foo8=foo();
foo8();  