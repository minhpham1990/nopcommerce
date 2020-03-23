import Logging from '../flows/Logging';
import Registering from '../flows/Registering'
import data from '../data/Register001';
describe('Register Function', () => {
  it('TC001: Create new account with valid email', () => {
    new Logging(data.newAccount)
      .enterNewEmail()  
    new Registering(data.newAccount)
      .createNewAccount().verifyCreateNewUserSuccess()
    browser.pause(3000)
  });
});
