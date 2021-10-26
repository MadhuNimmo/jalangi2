(function(){
        var prototype1 = {};
        var object1 = Object.create(prototype1);
        getPrototypeOf = Object.getPrototypeOf
        getPrototypeOf(object1) === prototype1;
})()