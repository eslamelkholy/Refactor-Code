class Vehicle {
  constructor (makeAndModel,rateCode) {
      this._makeAndModel = makeAndModel;
      this._rateCode = rateCode;
  }
  getRateCode() {
      return this._rateCode;
  }

  setRateCode(rateCode) {
      this._rateCode = rateCode;
  }

  getMakeAndModel() {
      return this._makeAndModel;
  }
}

module.exports = Vehicle;