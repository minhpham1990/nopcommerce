import memberInfo from '../entity/MemberInfo.js'
let randomid=Math.floor(Math.random()*10001)
const accLogin = new memberInfo()
accLogin.email=`acc_login${randomid}@yopmail.com`;
accLogin.gender='female';
accLogin.firstname='vy';
accLogin.lastname='nguyen';
accLogin.password='123123';
accLogin.birthdate='15';
accLogin.birthmonth='July';
accLogin.birthyear='1992'

const accPurchase = new memberInfo()
accPurchase.email=`acc_purchase${randomid}@yopmail.com`;
accPurchase.gender='male';
accPurchase.firstname='minh';
accPurchase.lastname='pham';
accPurchase.password='123123';
accPurchase.birthdate='9';
accPurchase.birthmonth='Septemper';
accPurchase.birthyear='1990'

const data={
  accLogin:accLogin,
  accPurchase:accPurchase
}
export default data;