describe('the fahrenheit2celsius canary spec', () => {
  it('shows the infrastructure works', () => {
    true.should.be.true();
  });

  let fahrenheit2celsius = (fahrenheit) => {
    return (fahrenheit - 32) * (5 / 9);
  };

  describe('fahrenheit2celsius', () => {
    it('fahrenheit2celsius returns 0 given 32', () => {
      fahrenheit2celsius(32).should.equal(0);
    });

    it('fahrenheit2celsius returns 10 given 50', () => {
      fahrenheit2celsius(50).should.equal(10);
    });
  });
});
