function A(){} /* constructor */

A.prototype = { /* especification of prop and methods of the class A */
	num    : 5,
	name   : 'test',
	action : function(){ /*base implementation*/},
        alert
};

function B(){ /* constructor */

	/* called base constructor:*/
	A.call(this); 

}

B.prototype = Object.create(A.prototype); /* Object.create is suported by: Chrome5+, Firefox4+, IE9+, Safari5+ */
B.prototype.num = 20; /* overwrite prop*/
B.prototype.action = function(base){ /* overried method */
	
	return function() {
		/* own implementation */
		base();
	};
}(A.prototype.action);
B.prototype.name = function(base){ /* overried prop */
	
	return base + " overload"; 
}(A.prototype.name); 


/* using */
var a = new A();
var b = new B();
console.log(a); /*show this:  {num: 5 , name: "test", action: function() { ... }} */
console.log(b); /*show this:  {num: 20, name: "test overload", action: function() { ... }} */