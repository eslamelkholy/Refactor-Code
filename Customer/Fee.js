class Fee{

  constructor(){
    this.feeManagement = '';
  }

  setFeeManagement(feeManagement){
    this.feeManagement = feeManagement
  }

  calculate(feeAmount){
    return this.feeManagement.calculateFee(feeAmount)
  }

}

module.exports = Fee;