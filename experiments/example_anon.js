var foo = function(){
 console.log("foo called");
 //function(x) { console.log("foo2 called");} 
  //bar();
  pup();
}

function bar(){
  console.log("bar called");
}

var pup = function pup2() {
	console.log('Hello World');
}

var sample = function() {
        return (function() { 
            console.log("something")
        })();
}
for (var i = 0; i < 10; i++){
  if (i%2 === 0){
    foo();
  } else {
    bar();
  }
}
sample();
console.log("done");
