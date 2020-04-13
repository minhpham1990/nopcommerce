class EleCustom {

  element(selector, timeout){
    browser.$(selector).waitForDisplayed(5000, false, 'I cannot find '+selector)
    return browser.$(selector)
  }
   
}

module.exports = new EleCustom()