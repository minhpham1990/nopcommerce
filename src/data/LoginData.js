import credential from '../entity/Credential'
const _validCred = new credential()
_validCred.email='minh@yopmail.com';
_validCred.password='123123';

const _invalidCred1 = new credential();
_invalidCred1.email='invalid_minh@yopmail.com';
_invalidCred1.password='123123';

const _invalidCred2 = new credential();
_invalidCred2.email='minh@yopmail.com';
_invalidCred2.password='123';


const data={
  validCred:_validCred,
  invalidCred1:_invalidCred1,
  invalidCred2:_invalidCred2
}
export default data;