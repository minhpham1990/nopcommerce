import ActionGen from '../../utils/ActionGen';
import logger from '@wdio/logger'
const EMAIL_TXB='#Email'
const PASSWORD_TXB='#Password'
const SIGNIN_BTN='.button-1.login-button'
const log = logger("ActionLog")
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
    log.info("Start to enter "+value+" into email textbox");
    ActionGen.getElement(EMAIL_TXB).setValue(value)
    return this
  }

  enterPassword(value){
    log.info("Start to enter "+value+" into password textbox");
    ActionGen.getElement(PASSWORD_TXB).setValue(value)
    return this
  }

  clickSignInBtn(){
    log.info("Start to click Login button");
    ActionGen.getElement(SIGNIN_BTN).click()
    return this
  }
}
export default new LoginPage()


