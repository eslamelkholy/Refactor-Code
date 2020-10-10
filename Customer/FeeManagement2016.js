const { _FOURxFOUR, _SEDAN, _SUV } = require("../Vehicle/VehiclesTypes");

class FeeManagement2016 {

  constructor(rental){
    this.rental = rental
  }
  
  calculateFee(feeAmount){
    const rentalRateCode = this.rental.getVehicle().getRateCode(); 

    switch (rentalRateCode) {
      case _SEDAN:
          feeAmount += 100*this.rental.getDaysRented();
          if (this.rental.getMileage() > this.rental.getDaysRented()*50)
              feeAmount += (this.rental.getMileage() - this.rental.getDaysRented()*50) * 2;
          
          break;

      case _FOURxFOUR:
          feeAmount += 200*this.rental.getDaysRented();
          break;

      case _SUV:
          feeAmount += 150*this.rental.getDaysRented();
          if (this.rental.getMileage() > this.rental.getDaysRented()*70)
              feeAmount += (this.rental.getMileage() - this.rental.getDaysRented()*70) * 2;
          break;

      default:
              feeAmount+=0;
    }
    return feeAmount
  }

}

module.exports = FeeManagement2016;
