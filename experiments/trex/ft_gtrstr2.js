(function(){
  var student = {
  firstName: function(){ return 'Monica'},
  get getName() {
    return this.firstName();
  }

}; 
student.getName;
})()