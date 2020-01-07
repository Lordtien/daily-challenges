import singleNumber from './single-number';

describe('Should pass all the tests', () => {
  test('Should find the single number', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
    expect(singleNumber([4, 1, 2, 1, 2])).toEqual(4);
  });
});
