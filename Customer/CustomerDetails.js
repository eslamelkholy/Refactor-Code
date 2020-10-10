class CustomerDetails {
  constructor(name){
    this.result = "Rental Record for:" + name + "\n";
  }

  generateText(totalAmount, rewardPoints){
    this.result += "Amount owed is LE " + totalAmount.toFixed(2) + "\n";
    this.result += "You earned: " + rewardPoints + " new Reward Points\n\n";
  }

  generateJson(totalAmount, rewardPoints, name){
    return {
      customerName: name,
      customerTotalAmount: totalAmount,
      customerRewardPoints: rewardPoints
    }
  }

}

module.exports = CustomerDetails;