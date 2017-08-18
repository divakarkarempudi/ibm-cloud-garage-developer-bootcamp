import * as months from './months';

describe.only('Months', () => {
  it('canary test should pass', () => {
    true.should.be.true();
  });


  describe('Months will return', () => {
    it('currentMonth when current() called', () => {
      let defaultDate = new Date('08/17/2017');
      let currentMonth = {year: 2017, month: 8};

      currentMonth.should.deepEqual(months.current(defaultDate));
    });

    it('priorMonth when prior() called', () => {
      let defaultDate = new Date('08/17/2017');
      let priorMonth = {year: 2017, month: 7};

      priorMonth.should.deepEqual(months.prior(defaultDate));
    });

  });
});
