(function(){
        var object1 = {
        property1: 42
        };
        var descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
        console.log(descriptor1.configurable); // expected output: true
        console.log(descriptor1.value);
})()
