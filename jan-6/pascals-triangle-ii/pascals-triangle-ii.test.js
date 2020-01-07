import getRow from './pascals-triangle-ii';

describe('Should pass all the tests', () => {
  test('Should merge sorted arrays correctly', () => {
    expect(getRow(3)).toEqual([1, 3, 3, 1]);
    expect(getRow(0)).toEqual([1]);
  });
});
