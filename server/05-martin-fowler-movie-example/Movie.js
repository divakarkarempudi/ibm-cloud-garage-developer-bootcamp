let Movie = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  function getCharge(daysRented) {
    let result = 0;
    //noinspection Eslint
    switch (priceCode) {
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

  function getFrequentRenterPoints(daysRented) {
    // add bonus for a two day new release each
    if ((priceCode === Movie.NEW_RELEASE) && daysRented > 1) return 2;
    return 1;
  }

  return {
    getCharge,
    getFrequentRenterPoints,
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; }
  };
};

Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;
Movie.CHILDRENS = 2;

export {Movie};
