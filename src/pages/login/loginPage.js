const EMAIL_CREATE_TXT='#email_create'
const CREATE_BTN='#SubmitCreate'
const EMAIL_TXT='#email'
const PASSWORD_TXT='#passwd'
const SIGNIN_BTN='#SubmitLogin'

class LoginPage{
  openPage(){
    browser.url('/index.php?controller=authentication&back=my-account')
    return this
  }
  isEmailTextDisplay(){
    return $(EMAIL_TXT).isDisplayed();p
  }
  enterEmail(value){
    $(EMAIL_TXT).setValue(value)
    return this
  }

  enterPassword(value){
    $(PASSWORD_TXT).setValue(value)
    return this
  }

  clickSignInBtn(){
    $(SIGNIN_BTN).click()
    return this
  }

  enterNewEmail(value){
    $(EMAIL_CREATE_TXT).setValue(value)
    return this
  }

  clickCreate(){
    $(CREATE_BTN).click()
    return this
  } 
}
export default new LoginPage()


