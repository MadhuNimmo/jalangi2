var person = {
isHuman: false,
printIntroduction: function() {
        console.log("My name");
}
};
var obj = {
        create: function(x){ return x}
}

var me = Object.create(person);

var you = obj.create();

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();