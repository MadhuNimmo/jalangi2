var myObject = {
        myFunction: function myFunction() {
                console.log("Hello from myFunction!");
        }
};

// Example of passing property name as function return
function getPropertyName() {
        return "myFunction";
        }
myObject[getPropertyName()]();

// Example of passing property name as a string
var propertyName = getPropertyName();
myObject[propertyName]();