const RentalRepository = require("../Rental/RentalRepository");
const RewardPoints = require("./RewardPoints");
const CustomerDetails = require("./CustomerDetails");

class Customer {
  constructor(name) {
      this._name = name;
      this.totalAmount = 0;
      this.rewardPoints = 0;
      this.rentalRepository = new RentalRepository();
      this.customerDetails = new CustomerDetails(this.getName())
  }

  getName() {
      return this._name;
  }

  calculateRewardsPoint(rental){
    const reward = new RewardPoints(rental);
    this.rewardPoints = reward.calculateRewardPoints(this.rewardPoints)
  }

  calculateTotalAmount(feeAmount, vehicleModel){
    this.customerDetails.result += "\t\"" + vehicleModel + "\"\tLE " + feeAmount.toFixed(2) + "\n";
    this.totalAmount += feeAmount;
  }

  customerRentalsInfo() {
    this.rentalRepository._rentals.forEach((rental => {
      rental.calculateRentalFee()
      if (!rental.isLate()) this.calculateRewardsPoint(rental)
      else rental.calculateLateFee()
      
      this.calculateTotalAmount(rental.feeAmount, rental.getVehicle().getMakeAndModel())
    }))
    this.customerDetails.generateText(this.totalAmount, this.rewardPoints);
    return this.customerDetails.result;
  }

  generateJson(){
    console.log(this.customerDetails.generateJson(this.totalAmount, this.rewardPoints, this.getName()))
  }
}


module.exports = Customer
