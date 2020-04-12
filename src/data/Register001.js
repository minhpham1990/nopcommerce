import memberInfo from '../entity/MemberInfo.js'
let randomid=Math.floor(Math.random()*10001)
const newAccount = new memberInfo()
newAccount.email=`auto${randomid}@yopmail.com`;
newAccount.gender='female';
newAccount.firstname='vy';
newAccount.lastname='nguyen';
newAccount.password='123123';
newAccount.birthdate='15';
newAccount.birthmonth='July';
newAccount.birthyear='1992'

const newAccount1 = new memberInfo()
newAccount1.email='';
newAccount1.gender='female';
newAccount1.firstname='';
newAccount1.lastname='';
newAccount1.password='';
newAccount1.birthdate='15';
newAccount1.birthmonth='July';
newAccount1.birthyear='1992'

const data={
  newAccount:newAccount,
  newAccount1:newAccount1
}
export default data;