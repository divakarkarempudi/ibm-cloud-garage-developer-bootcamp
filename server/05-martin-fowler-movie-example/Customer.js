import {Movie} from './Movie';

let Customer = (name) => {
  let rentals = [];

  function amountFor(aRental) {
    let result = 0;
    //noinspection Eslint
    switch (aRental.movie.priceCode) {
      case Movie.REGULAR:

        result += 2;
        if (aRental.daysRented > 2) {
          result += (aRental.daysRented - 2) * 1.5;
        }
        break;

      case Movie.NEW_RELEASE:

        result += aRental.daysRented * 3;
        break;

      case Movie.CHILDRENS:

        result += 1.5;
        if (aRental.daysRented > 3) {
          result += (aRental.daysRented - 3) * 1.5;
        }

        break;
      default:

    }
    return result;
  }

  return {
    get name() { return name; },
    addRental(rental) { rentals.push(rental); },

    statement() {
      let totalAmount = 0;
      let frequentRenterPoints = 0;
      let result = 'Rental Record for ' + name + '\n';

      for (let i = 0; i < rentals.length; i++) {
        let thisAmount = 0;
        let each = rentals[i];
        thisAmount = amountFor(each);

        // add frequent renter points
        frequentRenterPoints++;

        // add bonus for a two day new release each
        if ((each.movie.priceCode === Movie.NEW_RELEASE) &&
            each.daysRented > 1) frequentRenterPoints++;

        //show figures for this each
        result += '\t' + each.movie.title + '\t' + thisAmount.toString(10) + '\n';

        totalAmount += thisAmount;
      }

      //add footer lines
      result += 'Amount owed is ' + totalAmount.toString(10) + '\n';
      result += 'You earned ' + String(frequentRenterPoints) +
          ' frequent renter points';

      return result;
    }
  };
};

export {Customer};
