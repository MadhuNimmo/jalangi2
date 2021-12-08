var fs = require('fs');
txt="";

function foo(){
  console.log("foo callled");
  txt+="foo \n";
}

function bar(){
  console.log("bar called");
  txt+="boo \n";
}

for (var i = 0; i < 10; i++){
  if (i%2 === 0){
    foo();
  } else {
    bar();
  }
}
//fs.close(); 
fs.writeFileSync('/home/anon/jalangi2/write.txt',txt);
console.log("done");
