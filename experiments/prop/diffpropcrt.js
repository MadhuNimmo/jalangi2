var car = {
        brand: 'BMW', 
        year: 2010,
        model: "X4",
        mileage: 1234,
        get_brand: function (){return this.brand}
};
car.get_year = function (){return this.year}
car["get_model"] = function(){ return this.model}
Object.defineProperty(car, 'get_mileage', { 
        value: function() { return this.mileage},
        writable: true
})
var info = {get_info: function(){ return "info"}}
Object.assign(car, info)

car.get_brand();
car.get_year();
car.get_model();
car.get_mileage();
car.get_info();

// There is also spread operator but that is not suppoerted by ES5