const WELCOME_MSG='.info-account'

class MyAccountPage{
  openPage(){
    browser.url('/customer/info')
    return this
  }
}

export default new MyAccountPage();