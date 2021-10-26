/*(function(){
        var strng = "what";
        var reg = new RegExp('\\w');
        strng.match(reg);
        var xyx = Date('December 17, 1995 03:24:00');
        var z = new Function("return 2");

})()*/
(function () {
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
        myFunction1();
        myFunction2();
        clearTimeout(myTime);
})();