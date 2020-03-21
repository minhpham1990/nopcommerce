class CustomCommand {

  enterRandom(locator) {
    $(locator).setValue('xxx@xxx.com')
    return this
  }
}

module.exports = new CustomCommand()