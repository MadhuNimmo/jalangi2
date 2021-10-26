function Car(get, model, year) {
        this.get = get;
        this.model = model;
        this.year = year;
}
function Bike(get, model) {
        this.get = get;
        this.model = model;
}
        
var car1 = new Car(function(){ return 'Eagle'}, 'Talon TSi', 1993);
var car2 = new Car(function(){ return 'Eagle'}, 'Talon TSi', 1994);
var bike1 = new Bike(function(){ return 'Harley'}, 'Talon TSi');
car1.get();
bike1.get();