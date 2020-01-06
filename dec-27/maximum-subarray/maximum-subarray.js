/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let maxSum = nums[0];
  let currSum = nums[0];
  for (let i = 1; i < nums.length; i += 1) {
    currSum += nums[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    if (nums[i] > maxSum) {
      maxSum = nums[i];
      currSum = maxSum;
    }
    if (nums[i] > currSum) {
      currSum = nums[i];
    }
  }
  return maxSum;
};

export default maxSubArray;
