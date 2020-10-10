const assert = require('chai').assert
const VehicleFactory = require ("../Vehicle/index")
const Rental=require ("../Rental/Rental")
const Customer=require ("../Customer/Customer.js")

describe('The Statement should:', () => {
  it('Match current behavior', () => {
    let blueHonda = VehicleFactory.createVehicle("Blue Honda 2008", VehicleFactory.SEDAN);
    let greyJeep = VehicleFactory.createVehicle("Grey Jeep 2013", VehicleFactory.FOURxFOUR);
    let RedSunny = VehicleFactory.createVehicle("Red Sunny 2014", VehicleFactory.SEDAN);
    let BlueBMW = VehicleFactory.createVehicle("Blue X3 2017", VehicleFactory.SUV);

    let hondaRental = new Rental(blueHonda, 431, 4, false);
    let jeepRental = new Rental(greyJeep, 744, 4, false);
    let sunnnyRental = new Rental(RedSunny, 591, 3, true);
    let x3Rental = new Rental(BlueBMW, 240, 5, false);

    let virginGates = new Customer("Virgin Gates");
    let sharmDreams = new Customer("Sharm Dreams");

    virginGates.rentalRepository.addRental(hondaRental);
    virginGates.rentalRepository.addRental(jeepRental);
    virginGates.rentalRepository.addRental(sunnnyRental);

    sharmDreams.rentalRepository.addRental(x3Rental);
    assert.equal(virginGates.customerRentalsInfo(),"Rental Record for:Virgin Gates\n\t\"Blue Honda 2008\"\tLE 912.00\n\t\"Grey Jeep 2013\"\tLE 850.00\n\t\"Red Sunny 2014\"\tLE 1268.96\nAmount owed is LE 3030.96\nYou earned: 4 new Reward Points\n\n");
    assert.equal(sharmDreams.customerRentalsInfo(),"Rental Record for:Sharm Dreams\n\t\"Blue X3 2017\"\tLE 760.00\nAmount owed is LE 760.00\nYou earned: 1 new Reward Points\n\n");
    
    virginGates.generateJson()
    sharmDreams.generateJson()
  });
});
