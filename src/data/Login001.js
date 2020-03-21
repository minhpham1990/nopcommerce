import credential from '../entity/Credential'
const validCred = new credential()
validCred.email='minh@yopmail.com';
validCred.password='123123';

const invalidCred1 = new credential();
invalidCred1.email='invalid_minh@yopmail.com';
invalidCred1.password='123123';

const invalidCred2 = new credential();
invalidCred2.email='minh@yopmail.com';
invalidCred2.password='123';


const data={
  validCred:validCred,
  invalidCred1:invalidCred1,
  invalidCred2:invalidCred2
}
export default data;