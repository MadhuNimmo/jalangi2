function Car(make, model, year) {
        return make()+" "+model+" "+year
        }
function Bike(make, model, year) {
        return make()+" "+model+" "+year
        }
                
var car1 = Car(function(){ return 'Eagle'}, 'Talon TSi', 1993);
var car2 = Car(function(){ return 'Eagle'}, 'Talon TSi', 1994);
var bike1 = Bike(function(){ return 'Harley'}, 'Talon TSi', 1993);