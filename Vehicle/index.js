const Vehicle = require("./Vehicle");
const { _FOURxFOUR, _SEDAN, _SUV } = require("./VehiclesTypes");

class VehicleFactory{
    createVehicle(makeAndModel, rateCode){
        return new Vehicle(makeAndModel, rateCode);
    }

    get SUV() {return _SUV}
    get SEDAN() {return _SEDAN;}
    get FOURxFOUR() {return _FOURxFOUR;}
}

module.exports = new VehicleFactory()

