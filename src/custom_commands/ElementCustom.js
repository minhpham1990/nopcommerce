class CustomCommand {

  enterRandom(locator) {
    $(locator).setValue('xxx@xxx.com')
    return this
  }

  selectCheckboxByText(locator, option){
    
  }
}

module.exports = new CustomCommand()