/* eslint-disable no-param-reassign */
describe.only('the prime numbers canary spec', () => {
  it('shows test infrastructure works ', () => {
    true.should.be.true();
  });

  let primeFactorsOf = (number) => {
    const factors = [];
    for (let i = 2; i <= 3; i++) for (number > 1; number % i === 0; number /= i) factors.push(i);
    if (number > 1) factors.push(number);
    return factors;
  };

  describe('Prime factors of', () => {

    it('1 should be none', () => {
      primeFactorsOf(1).should.deepEqual([]);
    });

    it('2 should be 2', () => {
      primeFactorsOf(2).should.deepEqual([2]);
    });

    it('3 should be 3', () => {
      primeFactorsOf(3).should.deepEqual([3]);
    });

    it('4 should be 2 and 2', () => {
      primeFactorsOf(4).should.deepEqual([2, 2]);
    });

    it('5 should be 5', () => {
      primeFactorsOf(5).should.deepEqual([5]);
    });

    it('6 should be 2 and 3', () => {
      primeFactorsOf(6).should.deepEqual([2, 3]);
    });

    it('7 should be 7', () => {
      primeFactorsOf(7).should.deepEqual([7]);
    });

    it('8 should be 2, 2 and 2', () => {
      primeFactorsOf(8).should.deepEqual([2, 2, 2]);
    });

    it('9 should be 3 and 3', () => {
      primeFactorsOf(9).should.deepEqual([3, 3]);
    });

  });
});
