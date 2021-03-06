import RegisterPage from '../pages/login/RegisterPage.js'
import Header from '../pages/common/Header.js'
import ActionGen from '../utils/ActionGen'
export default class Registering {
  constructor(data) {
    this._data = data;
  }
  createNewAccount() {
    RegisterPage
      .openPage()
      .selectGender(this._data.gender)
      .enterFirstname(this._data.firstname)
      .enterLastname(this._data.lastname)
      .selectDOB(this._data.birthdate, this._data.birthmonth, this._data.birthyear)
      .enterEmail(this._data.email)
      .enterPassword(this._data.password)
      .enterConfirmPassword(this._data.password)
      .clickRegister()
    return this
  }
  verifyCreateNewUserSuccess() {
    expect(Header.isLogOutDisplayed()).to.be.true;
    expect(Header.isMyAccountDisplayed()).to.be.true;
    ActionGen.assertValue(RegisterPage.getWelcomeMsg(),'Your registration completed' );
    return this
  }
  verifyBlankFields(){
    expect(RegisterPage.getFirstNameMsg()).to.equal('First name is required.');
    expect(RegisterPage.getLastNameMsg()).to.equal('Last name is required.');
    expect(RegisterPage.getEmailMsg()).to.equal('Email is required.');
    expect(RegisterPage.getPassMsg()).to.equal('Password is required.');
    expect(RegisterPage.getConfirmPassMsg()).to.equal('Password is required.');
    return this
  }
}
