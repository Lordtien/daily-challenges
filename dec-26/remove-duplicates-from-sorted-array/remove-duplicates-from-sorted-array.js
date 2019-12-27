/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  let ind = 0; let i = 0;
  while (i < nums.length) {
    if (nums[ind] !== nums[i]) {
      // eslint-disable-next-line no-param-reassign
      nums[ind + 1] = nums[i];
      ind += 1;
    }
    i += 1;
  }
  return ind + 1;
};

export default removeDuplicates;
