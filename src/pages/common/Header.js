const MYACCOUNT_BTN ='.ico-account';
const LOGOUT_BTN ='.ico-logout';
const WISHLIST_BTN ='.wishlist-label';
const CART_BTN ='.ico-cart'

class Header{
  isMyAccountDisplayed(){
    return $(MYACCOUNT_BTN).isDisplayed();
  }
  isLogOutDisplayed(){
    return $(LOGOUT_BTN).isDisplayed();
  }
}
export default new Header()