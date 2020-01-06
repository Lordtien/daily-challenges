import maxSubArray from './maximum-subarray';

describe('Should pass all the tests', () => {
  test('Should find maximum sum of a contiguous subarray', () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubArray([8, -19, 5, -4, 20])).toBe(21);
  });
});
