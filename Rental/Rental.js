const Fee = require("../Customer/Fee");
const FeeManagement2016 = require("../Customer/FeeManagement2016");
const FeeManagement2017 = require("../Customer/FeeManagement2017");
const FeeManagement2018 = require("../Customer/FeeManagement2018");

class Rental {

    constructor (vehicle,mileage,daysRented,lateFee) 
    {
        this._vehicle = vehicle;
        this._kilometersRented = mileage;
        this._daysRented=daysRented;
        this._lateFee=lateFee;
        this.feeAmount = 50.0;
        this.fee = new Fee();
        this.feeManagement2016 = new FeeManagement2016(this);
        this.feeManagement2017 = new FeeManagement2017(this);
        this.feeManagement2018 = new FeeManagement2018(this);

    }

    getMileage() {
        return this._kilometersRented;
    }

    getVehicle() {
        return this._vehicle;
    }

    getDaysRented() {
        return this._daysRented;
    }

    isLate() {
        return this._lateFee;
    }
    calculateRentalFee(){
        this.fee.setFeeManagement(this.feeManagement2016);
        this.feeAmount = this.fee.calculate(this.feeAmount)

        this.fee.setFeeManagement(this.feeManagement2017);
        this.feeAmount = this.fee.calculate(this.feeAmount);

        return this.feeAmount
    }

    calculateLateFee(){
        this.fee.setFeeManagement(this.feeManagement2018);
        this.feeAmount = this.fee.calculate(this.feeAmount);
        
        return this.feeAmount
    }

    calculateRewardsPoint(){
        const rewardPointsObject = new RewardPoints(this);
        this.rewardPoints = rewardPointsObject.calculateRewardPoints(this.rewardPoints)
    }
}

module.exports = Rental
