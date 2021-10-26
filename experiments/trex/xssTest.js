/*eval('var x = function(){return 2}');
x()
*/
var myTime;
function myFunction1() {
        myTime = setTimeout(function(){  return "Hello"; }, 1);
      }
function myFunction2() {
var timesRun =0;
var interval = setInterval(function(){  timesRun += 1;
        if(timesRun === 2){
            clearInterval(interval);
        } }, 30);
}
myFunction1()
myFunction2()
var y = new Function("return 3")
y();
clearTimeout(myTime);
