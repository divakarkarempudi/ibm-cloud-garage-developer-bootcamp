describe.only('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  describe('palindrome', () => {
    it('be true for mom');
    it('false for dude');
    it('true for a');
    it('true for mom dad mom');

    it('false for ""');
    it('false for "       "');
  });
});
