const GENDER_OPTION = '//div[@class="gender"]/span[@class="%s"]/input'
const FIRSTNAME_TXB = '#FirstName';
const LASTNAME_TXB = '#LastName';
const DOBDAY_DDL ='select[name="DateOfBirthDay"]';
const DOBMONTH_DDL ='select[name="DateOfBirthMonth"]';
const DOBYEAR_DDL ='select[name="DateOfBirthYear"]';
const EMAIL_TXB = '#Email'
const PASSWORD_TXB = '#Password'
const PASSWORD_CONFIRM_TXB ='#ConfirmPassword';
const WELCOME_MSG='div[class=result]'
const REGISTER_BTN='.button-1.register-next-step-button'
const CONT_BTN='.button-1.register-continue-button'
class RegisterPage{
  openPage(){
    browser.url('/register')
    return this
  }

  selectGender(value){
    $(sprintf(GENDER_OPTION,value)).click();
    return this
  }

  enterFirstname(value){
    $(FIRSTNAME_TXB).setValue(value);
    return this
  }

  enterLastname(value){
    $(LASTNAME_TXB).setValue(value);
    return this
  }

  selectDOB(day,month,year){
    $(DOBDAY_DDL).selectByVisibleText(day);
    $(DOBMONTH_DDL).selectByVisibleText(month);
    $(DOBYEAR_DDL).selectByVisibleText(year);
    return this
  }
  enterEmail(value){
    $(EMAIL_TXB).setValue(value);
    return this
  }
  enterPassword(value){
    $(PASSWORD_TXB).setValue(value);
    return this
  }
  enterConfirmPassword(value){
    $(PASSWORD_CONFIRM_TXB).setValue(value);
    return this
  }

  clickRegister(){
    $(REGISTER_BTN).click()
    return this
  }

  getWelcomeMsg(){
    $(WELCOME_MSG).waitForDisplayed(5000)
    let msg=$(WELCOME_MSG).getText();
    return msg
  }

  clickContinue(){
    $(CONT_BTN).click();
    return this
  }
}

export default new RegisterPage();