import merge from './merge-sorted-array';

describe('Should pass all the tests', () => {
  test('Should merge sorted arrays correctly', () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    let nums2 = [2, 5, 6];
    merge(nums1, 3, nums2, 3);
    expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6]);
    nums1 = [2, 0];
    nums2 = [1];
    merge(nums1, 1, nums2, 1);
    expect(nums1).toStrictEqual([1, 2]);
    nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0];
    nums2 = [1, 2, 2];
    merge(nums1, 6, nums2, 3);
    expect(nums1).toStrictEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3]);
  });
});
