describe.only('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = () => {
    return true;
  };

  describe('a palindrome should', () => {
    it('be true for mom', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for dude');
    it('true for a');
    it('true for mom dad mom');

    it('false for ""');
    it('false for "       "');
  });
});
