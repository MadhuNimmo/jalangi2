function foo(){
    return function bar(){
    };
}
//foo()();
var qoute=foo();
qoute();


/*function foo(){
  return function foo2(){
    return function foo3(){
    };
  }();
}
//foo()();
var foo4=foo();
foo4();*/

//log return values
//_return