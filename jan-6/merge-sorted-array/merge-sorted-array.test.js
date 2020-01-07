import merge from './merge-sorted-array';

describe('Should pass all the tests', () => {
  test('Should merge sorted arrays correctly', () => {
    expect([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3).toBe([1, 2, 2, 3, 5, 6]);
    expect(merge([2, 0], 1, [1], 1)).toBe([1, 2]);
    expect(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)).toBe([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
  });
});
