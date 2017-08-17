const prior = (thisMonthDate = new Date()) => {
  thisMonthDate.setMonth(thisMonthDate.getMonth() - 1);
  return {
     year: thisMonthDate.getFullYear(),
     month: thisMonthDate.getMonth() + 1
  };
};

const current = (thisMonthDate = new Date()) => {
  return {
     year: thisMonthDate.getFullYear(),
     month: thisMonthDate.getMonth() + 1
  };
};

export {prior, current};
