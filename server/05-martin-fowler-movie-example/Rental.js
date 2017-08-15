let Rental = (movie, daysRented) => {

  function getCharge() {
   return movie.getCharge(daysRented);
  }

  function getFrequentRenterPoints() {
    return movie.getFrequentRenterPoints(daysRented);
  }

  return {
    getCharge,
    getFrequentRenterPoints,
    get movie() { return movie; },
    get daysRented() { return daysRented; }
  };
};

export {Rental};
