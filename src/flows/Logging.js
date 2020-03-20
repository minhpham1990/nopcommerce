import login from '../pages/login/LoginPage.js'
import myaccount from '../pages/account/MyAccountPage.js'
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

  verifyUserLoginSuccessful(){
    expect(myaccount.getWelcomeMsg()).to.equal('Welcome to your account. Here you can manage all of your personal information and orders.');
    return this
  }



}





