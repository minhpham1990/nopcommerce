import Registering from '../flows/Registering'
import data from '../data/Register001';
describe('Register Function', () => {
  it('TC001: Verify create new account success', () => {
    new Registering(data.newAccount)
      .createNewAccount().verifyCreateNewUserSuccess()
  });

  it('TC002: Verify cannot create with blank require fields', () => {
    new Registering(data.newAccount1)
      .createNewAccount().verifyBlankFields()
  });
});
