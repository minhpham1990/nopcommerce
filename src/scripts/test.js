import CusCommand from '../custom_commands/CommandCustom';

// const NUMBER_LOC = '#number-button';
// const NUMBER_ITEMS_LOC = '//ul[@id="number-menu"]//div';
// describe('test', () => {
//   it('test', () => {
//     browser.url('https://jqueryui.com/resources/demos/selectmenu/default.html')
//     CusCommand.selectItemInDropdown(NUMBER_LOC,NUMBER_ITEMS_LOC,"10")
//   });
// });

const NUMBER_LOC = 'select[name="DateOfBirthDay"]';
const NUMBER_ITEMS_LOC = 'select[name="DateOfBirthDay"]>option';
describe('test', () => {
  it('test', () => {
    browser.url('https://demo.nopcommerce.com/register')
    CusCommand.selectItemInDropdown(NUMBER_LOC,NUMBER_ITEMS_LOC,"10")
  });
});