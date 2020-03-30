class CustomCommand {

  enterRandom(locator) {
    $(locator).setValue('xxx@xxx.com')
    return this
  }

  element(selector, timeout){
    browser.$(selector).waitForDisplayed(5000, false, 'I cannot find '+selector)
    return browser.$(selector)
  }
   
}

module.exports = new CustomCommand()