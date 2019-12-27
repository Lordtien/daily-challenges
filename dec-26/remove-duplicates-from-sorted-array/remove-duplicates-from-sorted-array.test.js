import removeDuplicates from './remove-duplicates-from-sorted-array';

describe('Should pass all the tests', () => {
  test('Should remove duplicates in-place', () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
    expect(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5);
    expect(removeDuplicates([1, 1])).toBe(1);
  });
});
