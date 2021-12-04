function foo(){
        return bar;
      }
function bar(){
        return;
      }
/*for (var i = 0; i < 1; i++){
        if (i%2 === 0){
          x= foo;
          y=x
          foo()
        } else {
          bar();
        }
      }*/
x=foo();
x();
//x=foo()

//console.log("done");*/