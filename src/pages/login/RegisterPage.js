const TITLE='.radio-inline > .top > .radio > span > #id_gender%s'
const FIRSTNAME_TXT='#customer_firstname'
const LASTNAME_TXT='#customer_lastname'
const PASSWORD_TXT='#passwd'
const ADDRESS_TXT='#address1'
const CITY_TXT='#city'
const STATE_DDL='#id_state'
const ZIP_TXT='#postcode'
const COUNTRY_DDL='#id_country'
const MOBILE_TXT='#phone_mobile'
const SUBMIT_BTN='#submitAccount'
const BIRTHDATE_DDL='//select[@id="days"]'
const BIRTHMONTH_DDL='//select[@id="months"]'
const BIRTHYEAR_DDL='//select[@id="years"]'
const BIRTHDATE_OPTION ='//div[@id="uniform-days"]//option[@value="%s"]'
const BIRTHMONTH_OPTION='//select[@id="months"]//option[starts-with(text(),"%s")]'
const BIRTHYEAR_OPTION='//select[@id="years"]//option[starts-with(text(),"%s")]'
const WELCOME_MSG='.info-account'
class RegisterPage{
  selectTitle(idCheckBox){
    $(sprintf(TITLE,idCheckBox)).click()
    return this
  }

  enterFirstName(value){
    $(FIRSTNAME_TXT).setValue(value)
    return this
  }

  enterLastName(value){
    $(LASTNAME_TXT).setValue(value)
    return this
  }

  enterPassword(value){
    $(PASSWORD_TXT).setValue(value)
    return this
  }

  selectBirthDate(date){
    $(BIRTHDATE_DDL).selectByAttribute('value',date)
    return this
  }
  selectBirthMonth(month){
    $(BIRTHMONTH_DDL).click()
    $(sprintf(BIRTHMONTH_OPTION,month)).click()
    return this
  }
  selectBirthYear(year){
    $(BIRTHYEAR_DDL).click();
    $(sprintf(BIRTHYEAR_OPTION,year)).click()
    return this
  }

  enterAddress(value){
    $(ADDRESS_TXT).setValue(value)
    return this
  }

  enterCity(value){
    $(CITY_TXT).setValue(value)
    return this
  }

  selectState(value){
    $(STATE_DDL).selectByVisibleText(value)
    return this
  }

  enterZipCode(value){
    $(ZIP_TXT).setValue(value)
    return this
  }

  selectCountry(value){
    $(COUNTRY_DDL).selectByVisibleText(value)
    return this
  }

  enterMobilePhone(value){
    $(MOBILE_TXT).setValue(value)
    return this
  }

  clickRegister(){
    $(SUBMIT_BTN).click()
    return this
  }

  getWelcomeMsg(){
    $(WELCOME_MSG).waitForDisplayed(5000)
    let msg=$(WELCOME_MSG).getText();
    return msg
  }
}

export default new RegisterPage();