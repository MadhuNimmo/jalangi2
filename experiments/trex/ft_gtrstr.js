var userX = {};
userX.nameX = function (){ return "John"};
Object.defineProperty(userX, "fullName", {
get: function(){return this.nameX();},
set: function(val){this.nameX = val;},
enumerable: true,
configurable: true,
});
userX.fullName = function (){ return "Catana"}
console.log(userX.fullName);