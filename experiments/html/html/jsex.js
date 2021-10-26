var x = 10;
function createFunction1() {
    var x = 20;
    return new Function('console.log("here")'); // this |x| refers global |x|
};
var f1 = createFunction1();//
//var f1 = new Function('console.log("foo called")');
f1();

/*function foo(){
  console.log("foo called");
}

function bar(){
  console.log("bar called");
}

for (var i = 0; i < 10; i++){
  if (i%2 === 0){
    foo();
    //foo("x");
  } else {
    bar();
  }
}*/
//console.log("done");
//foo();
