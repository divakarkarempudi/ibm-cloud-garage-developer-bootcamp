import {replace, when, verify} from '../../test-helper';

describe.only('unusual spending should', () => {
  it('canary test should always pass', () => {
    true.should.be.true();
  });

  it('orchestrates fetch, categorize and email', () => {
      //arrange
      const fetch = replace('./fetch').fetch;
      const categorize = replace('./categorize').categorize;
      const email = replace('./email').email;

      const error = new Error('Fetch don\'t work');

      when(fetch('id')).thenReject(error);
      when(categorize('payments')).thenReturn('categorized-payments');

      let unusualSpending = require('./unusual-spending').unusualSpending;

      function onError(errorMessage) {
        errorMessage.message.should.equal('Fetch don\'t work');
      }
      return unusualSpending('id').catch(onError);
    });
});
