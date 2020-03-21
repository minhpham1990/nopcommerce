import memberInfo from '../entity/MemberInfo.js'
let randomid=Math.floor(Math.random()*10001)
const newAccount = new memberInfo()
newAccount.email=`minhauto${randomid}@yopmail.com`;
newAccount.title='Mr.';
newAccount.firstname='minh';
newAccount.lastname='pham';
newAccount.password='123123';
newAccount.birthdate='9'+'September'+'1990';
newAccount.address='';
newAccount.city='';
newAccount.state='';
newAccount.zip='';
newAccount.country='';
newAccount.mobile='';


const data={
  newAccount:newAccount,
}
export default data;