import Logging from '../flows/Logging';
import data from '../data/Register001';
describe('Register Function', () => {
  it('TC001: Create new account with valid email', () => {
    new Logging(data.newAccount)
      .createNewAccount()
    browser.pause(4000)
  });
});
