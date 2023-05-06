var foo = {
        fooFunction: function myFunction() {
                console.log("Hello from myFunction!");
        }
};

var bar = {}
bar.barFunction = foo.fooFunction;
//bar.barFunction();
bar.barFunction.call(this)