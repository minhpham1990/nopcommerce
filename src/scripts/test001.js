
describe('Login Function', () => {
  it('TC001: Login successful', () => {
    browser.url('/index.php?controller=authentication&back=my-account');
    let a=browser.getUrl();
    expect(a).to.equal('http://automationpractice.com/index.php?controller=authentication&back=my-account');
  });
});