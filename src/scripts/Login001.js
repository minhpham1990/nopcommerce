import Logging from '../flows/Logging';
import data from '../data/Login001'
describe('Login Function', () => {
  it('TC001: Login with invalid email', () => {
    new Logging(data.invalidCred1)
      .loginWithCred()
  });

  it('TC002: Login with invalid password', () => {
    new Logging(data.invalidCred2)
      .loginWithCred()
  });

  it('TC003: Login successful with valid account', () => {
    new Logging(data.validCred)
      .loginWithCred().verifyUserLoginSuccessful()
  });

});
