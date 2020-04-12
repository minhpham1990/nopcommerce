import login from '../pages/login/LoginPage.js'
import header from '../pages/common/Header.js'
export default class Logging {
  constructor(data) {
    this._data = data
  }

  loginWithCred() {
    login.openPage()
      .enterEmail(this._data.email)
      .enterPassword(this._data.password)
      .clickSignInBtn();
    return this
  }

  loginWithValidUserAndPass(username,password){
    login.openPage()
      .enterEmail(username)
      .enterPassword(password)
      .clickSignInBtn();
    return this
  }
  verifyPageDisplayCorrectly(){
    login.openPage()
    expect(login.isEmailTxtDisplay()).to.be.true;
    expect(login.isPasswordTxtDisplay()).to.be.true;
    return this
  }
  verifyUserLoginSuccessful(){
    expect(header.isLogOutDisplayed()).to.be.true;
    expect(header.isMyAccountDisplayed()).to.be.true;
    return this
  }

  enterNewEmail(){
    login.openPage()
      .enterNewEmail(this._data.email)
      .clickCreate();
    return this
  }
}





