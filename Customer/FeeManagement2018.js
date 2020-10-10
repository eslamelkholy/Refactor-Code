class FeeManagement2018 {

  constructor(rental){
    this.rental = rental
  }

  calculateFee = (feeAmount) => feeAmount += feeAmount * 0.03;

}

module.exports = FeeManagement2018