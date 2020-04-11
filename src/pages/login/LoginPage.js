const EMAIL_TXB='#Email'
const PASSWORD_TXB='#Password'
const SIGNIN_BTN='.button-1.login-button'

class LoginPage{
  openPage(){
    browser.url('/login')
    return this
  }
  isEmailTxtDisplay(){
    return $(EMAIL_TXB).isDisplayed();
  }

  isPasswordTxtDisplay(){
    return $(PASSWORD_TXB).isDisplayed();
  }
  enterEmail(value){
    $(EMAIL_TXB).setValue(value)
    return this
  }

  enterPassword(value){
    $(PASSWORD_TXB).setValue(value)
    return this
  }

  clickSignInBtn(){
    $(SIGNIN_BTN).click()
    return this
  }
}
export default new LoginPage()


