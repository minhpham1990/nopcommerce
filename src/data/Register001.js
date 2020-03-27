import memberInfo from '../entity/MemberInfo.js'
let randomid=Math.floor(Math.random()*10001)
const newAccount = new memberInfo()
newAccount.email=`minhauto${randomid}@yopmail.com`;
newAccount.title='Mrs';
newAccount.firstname='vy';
newAccount.lastname='nguyen';
newAccount.password='123123';
newAccount.birthdate='15';
newAccount.birthmonth='July';
newAccount.birthyear='1992'
newAccount.address='32K Street 5K';
newAccount.city='Los Angeles';
newAccount.state='California';
newAccount.zip='90201';
newAccount.country='United States';
newAccount.mobile='0938489777';

const data={
  newAccount:newAccount,
}
export default data;