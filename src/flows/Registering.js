import RegisterPage from '../pages/login/RegisterPage.js'
export default class Registering{
  constructor(data){
    this._data=data;
  }
  createNewAccount(){
    if(this._data.title==='Mr')
    {
      RegisterPage.selectTitle(1);
    }
    else if(this._data.title==='Mrs'){
      RegisterPage.selectTitle(2);
    }
    RegisterPage
      .enterFirstName(this._data.firstname)
      .enterLastName(this._data.lastname)
      .enterPassword(this._data.password)
      .selectBirthDate(this._data.birthdate)
      .selectBirthMonth(this._data.birthmonth)
      .selectBirthYear(this._data.birthyear)
      .enterAddress(this._data.address)
      .enterCity(this._data.city)
      .selectState(this._data.state)
      .enterZipCode(this._data.zip)
      .selectCountry(this._data.country)
      .enterMobilePhone(this._data.mobile)
      .clickRegister()
    return this
  }
  verifyCreateNewUserSuccess(){
    expect(RegisterPage.getWelcomeMsg()).to.equal('Welcome to your account. Here you can manage all of your personal information and orders.');
    return this
  }
}
