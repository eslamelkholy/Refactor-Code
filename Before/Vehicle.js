class Vehicle {

    constructor (makeAndModel,rateCode) {
        this._makeAndModel = makeAndModel;
        this._rateCode = rateCode;
    }

    getRateCode() {
        return this._rateCode;
    }

    setRateCode(arg) {
        this._rateCode = arg;
    }

    getMakeAndModel() {
        return this._makeAndModel;
    }

    static get SUV() {return _SUV;}
    static get SEDAN() {return _SEDAN;}
    static get FOURxFOUR() {return _FOURxFOUR;}
}

const _SUV = 2;
const _SEDAN = 0;
const _FOURxFOUR = 1;

module.exports = Vehicle

