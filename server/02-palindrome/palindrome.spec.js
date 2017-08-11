describe('the palindrome canary spec', () => {
  it('shows the test infrastructure works', () => {
    true.should.be.true();
  });

  let isPalindrome = (phrase) => {
    if (phrase.trim() === '') {
       return false;
    }
    return phrase === phrase.split('').reverse().join('');
  };

  describe('a palindrome should', () => {
    it('be true for mom', () => {
      isPalindrome('mom').should.be.true();
    });

    it('false for dude', () => {
      isPalindrome('dude').should.be.false();
    });

    it('true for a', () => {
          isPalindrome('a').should.be.true();
    });
    it('true for mom dad mom', () => {
          isPalindrome('mom dad mom').should.be.true();
    });
    it('false for ""', () => {
      isPalindrome('').should.be.false();
    });
    it('false for "       "', () => {
      isPalindrome('   ').should.be.false();
    });
  });
});
