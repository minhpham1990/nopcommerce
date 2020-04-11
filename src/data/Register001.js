import memberInfo from '../entity/MemberInfo.js'
let randomid=Math.floor(Math.random()*10001)
const newAccount = new memberInfo()
newAccount.email=`minhauto${randomid}@yopmail.com`;
newAccount.gender='female';
newAccount.firstname='vy';
newAccount.lastname='nguyen';
newAccount.password='123123';
newAccount.birthdate='15';
newAccount.birthmonth='July';
newAccount.birthyear='1992'
const data={
  newAccount:newAccount,
}
export default data;