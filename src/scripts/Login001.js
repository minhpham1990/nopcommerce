import Logging from '../flows/Logging';
import Registering from '../flows/Registering';
import data from '../data/Login001'
import newData from '../data/ListAccount'
describe('Login Function', () => {
  it('TC001: Verify page displayed correct', () => {
    
    new Logging()
    .verifyPageDisplayCorrectly()
  });

  it('TC002: Login with invalid email', () => {
    new Logging(data.invalidCred1)
      .loginWithCred()
  });

  it('TC003: Login with invalid password', () => {
    new Logging(data.invalidCred2)
      .loginWithCred()
  });

  it('TC004: Login successful with valid account', () => {
    new Registering(newData.accLogin)
      .createNewAccount()
    new Logging()
      .loginWithValidUserAndPass(newData.accLogin.email,newData.accLogin.password) .verifyUserLoginSuccessful()
  });

});
