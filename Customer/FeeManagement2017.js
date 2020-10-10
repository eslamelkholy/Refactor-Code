const { _FOURxFOUR, _SUV } = require("../Vehicle/VehiclesTypes");

class FeeManagement2017 {

  constructor(rental){
    this.rental = rental
  }

  calculateFee(feeAmount){
    
    if (!(this.rental.getMileage() <200))
    {
        if (this.rental.getDaysRented()>10 && this.rental.getVehicle().getRateCode()== _FOURxFOUR)
            feeAmount-=feeAmount*0.05;
        else if (this.rental.getVehicle().getRateCode()== _SUV)
            feeAmount-=feeAmount*0.05;
    }
    
    return feeAmount;
  }

}

module.exports = FeeManagement2017