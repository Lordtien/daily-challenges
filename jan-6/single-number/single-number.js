/* eslint-disable no-bitwise */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = (nums) => nums.reduce((acc, x) => acc ^ x, 0);

export default singleNumber;
