/* eslint-disable no-param-reassign */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const pushAt = (arr, index, val) => {
  let temp1 = arr[index];
  let temp2 = 0;
  arr[index] = val;
  for (let i = index + 1; i < arr.length; i += 1) {
    temp2 = arr[i];
    arr[i] = temp1;
    temp1 = temp2;
  }
  return undefined;
};

const merge = (nums1, m, nums2, n) => {
  let i = 0; let j = 0;
  while (i < nums1.length) {
    if (nums1[i] > nums2[j]) {
      pushAt(nums1, i, nums2[j]);
      j += 1;
    } else if (i > j + m - 1) {
      pushAt(nums1, i, nums2[j]);
      j += 1;
    }
    i += 1;
  }
  return undefined;
};

export default merge;
