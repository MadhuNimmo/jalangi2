var foo = () => {
  console.log("foo called");
  //bar();
}

function bar(){
  console.log("bar called");
}

for (var i = 0; i < 10; i++){
  if (i%2 === 0){
    foo();
  } else {
    bar();
  }
}
console.log("done");
