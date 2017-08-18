import * as months from './months';
import {apiWrapper} from './apiWrapper';

const fetch = (userId) => {
  const currentsPayments = apiWrapper(userId, months.current());
  const priorPayments = apiWrapper(userId, months.prior());

  return priorPayments.concat(currentsPayments);
};

export {fetch};
