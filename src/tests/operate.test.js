import operate from '../logic/operate';

describe('operate logic is working correctly', () => {

  const objMock = {
    total: 10,
    next: 5,
    operation: '+',
  }

  test('operate func is adding correctly', () => {
    expect(operate(objMock.total, objMock.next, '+')).toEqual('15');
  });

  test('operate func is substracting correctly', () => {
    expect(operate(objMock.total, objMock.next, '-')).toEqual('5');
  });

  test('operate func is dividing correctly', () => {
    expect(operate(objMock.total, objMock.next, '÷')).toEqual('2');
  });

  test('operate func is multiplying correctly', () => {
    expect(operate(objMock.total, objMock.next, 'x')).toEqual('50');
  });
})
