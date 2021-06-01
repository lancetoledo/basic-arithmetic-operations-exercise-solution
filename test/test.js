const expect = chai.expect,
  testnum1 = 23;
testnum2 = 3;
testoperator = '*';
describe('Basic Arithmetic Operations', () => {
  it('Create if, else statements for every basic arithmetic operation', () => {
    expect(operation(testnum1, testnum2, testoperator)).to.equal(
      69,
      'Please check your function!'
    );
  });
});
