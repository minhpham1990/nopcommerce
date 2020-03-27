const WELCOME_MSG='.info-account'

class MyAccountPage{
  waitForPageDisplay(){
  
  }
  getWelcomeMsg(){
    
    let msg=$(WELCOME_MSG).getText();
    return msg;
  }
}

export default new MyAccountPage();