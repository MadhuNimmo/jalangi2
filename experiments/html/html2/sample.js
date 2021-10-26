/*var myVar;

function myFunction() {
  myVar = setTimeout(function(){ alert("Hello"); }, 3000);
}

function myStopFunction() {
  clearTimeout(myVar);
}*/

(function(window){
  var btn = document.getElementById('test');
  btn.addEventListener('click', function() {
      // handle the click event
      alert('clicked');
  });
})(window);

/*(function(window){
  //function runOnLoad(){
    var eventHandler = function(){console.log("xyz")}
    //setTimeOut(document.getElementById("test").addEventListener("click",eventHandler ),500)
    window.addEventListener('DOMContentLoaded', (event) => {
      eventHandler
  });
  //}
  //$(window).on('load',runOnLoad())
  //runOnLoad()
})(window);*/