import logger from '@wdio/logger'
const log = logger("ActionLog")
class ActionGen {
    getElement(locator) {
        log.info("Start to get element "+locator )
        browser.$(locator).waitForDisplayed(5000, false, "Cannot find element " + locator)
        return browser.$(locator);
    }

    assertValue(actualValue, expectValue) {
        log.info("Assert value: "+actualValue+" - "+expectValue )
        return expect(actualValue).to.equal(expectValue);
    }
}
export default new ActionGen()