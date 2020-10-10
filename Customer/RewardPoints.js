const { _FOURxFOUR, _SUV } = require("../Vehicle/VehiclesTypes");

class RewardPoints {

  constructor(rental){
    this.rental = rental
  }

  calculateRewardPoints(rewardPoints){
    // add frequent renter points
    rewardPoints++;
        
    // add bonus for SUV rental
    if ((this.rental.getVehicle().getRateCode() == _FOURxFOUR)) rewardPoints *= 2;

    // add bonus for SUV rental
    if ((this.rental.getVehicle().getRateCode() == _SUV) && this.rental.getDaysRented() > 5)
        rewardPoints += (this.rental.getDaysRented() - 5);
    return rewardPoints
  }
  
}

module.exports = RewardPoints