class CustomCommand {

  selectItemInDropdown(locatorDDL, locatorItems, selectItem){
    //click on parent tag
    $(locatorDDL).click()

    //wait for click items
    $(locatorItems).waitForDisplayed();

    //check item want select exist in array locatorItems
    // ($$(locatorItems)).forEach(item => {
    //   if (item.getText()===selectItem){
    //     item.click()
    //   }
    // });
    for (let item of $$(locatorItems)) {
      if (item.getText()===selectItem) {
        item.click();
        break;
      }
    }
  }
}
module.exports = new CustomCommand()