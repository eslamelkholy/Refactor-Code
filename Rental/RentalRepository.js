/**
 * Implemented Mediator Design 
 * To Control Rentals For Each Customer
 */

class RentalRepository{
  constructor(){
    this._rentals=[];
  }
  addRental(rental) {
      this._rentals.push(rental)
  }

  get rentalCount(){
      return this._rentals.length
  }
}

module.exports = RentalRepository