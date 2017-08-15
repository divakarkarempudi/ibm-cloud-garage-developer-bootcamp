let Movie = (title, somePriceCode) => {
  let priceCode = somePriceCode;

  return {
    get title() { return title; },
    get priceCode() { return priceCode; },
    set priceCode(code) { priceCode = code; }
  };
};

Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;
Movie.CHILDRENS = 2;

export {Movie};
