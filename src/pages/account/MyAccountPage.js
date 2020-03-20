const WELCOME_MSG='.info-account'

class MyAccountPage{
  getWelcomeMsg(){
    let msg=$(WELCOME_MSG).getText();
    return msg;
  }
}

export default new MyAccountPage();