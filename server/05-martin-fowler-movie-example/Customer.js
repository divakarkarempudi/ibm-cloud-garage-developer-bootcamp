let Customer = (name) => {
  let rentals = [];

  function getTotalCharge() {
    let totalAmount = 0;

    for (let i = 0; i < rentals.length; i++) {
      let each = rentals[i];
      totalAmount += each.getCharge();
    }
    return totalAmount;
  }

  function getTotalFrequentRenterPoints() {
    let frequentRenterPoints = 0;

     for (let i = 0; i < rentals.length; i++) {
       let each = rentals[i];
       frequentRenterPoints += each.getFrequentRenterPoints();
     }
     return frequentRenterPoints;
   }

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let result = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let each = rentals[i];

        //show figures for this each
        result += '\t' + each.movie.title + '\t' + each.getCharge().toString(10) + '\n';
      }

      //add footer lines
      result += 'Amount owed is ' + getTotalCharge().toString(10) + '\n';
      result += 'You earned ' + String(getTotalFrequentRenterPoints()) + ' frequent renter points';

      return result;
    }
  };
};

export {Customer};
