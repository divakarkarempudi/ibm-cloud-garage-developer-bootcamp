import {Movie} from './Movie';

let Rental = (movie, daysRented) => {

  function getCharge() {
    let result = 0;
    //noinspection Eslint
    switch (movie.priceCode) {
      case Movie.REGULAR:

        result += 2;
        if (daysRented > 2) {
          result += (daysRented - 2) * 1.5;
        }
        break;

      case Movie.NEW_RELEASE:

        result += daysRented * 3;
        break;

      case Movie.CHILDRENS:

        result += 1.5;
        if (daysRented > 3) {
          result += (daysRented - 3) * 1.5;
        }

        break;
      default:

    }
    return result;
  }

  function getFrequentRenterPoints() {
    // add bonus for a two day new release each
    if ((movie.priceCode === Movie.NEW_RELEASE) && daysRented > 1) return 2;
    return 1;
  }

  return {
    getCharge,
    getFrequentRenterPoints,
    get movie() { return movie; },
    get daysRented() { return daysRented; }
  };
};

export {Rental};
