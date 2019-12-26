/* eslint-disable no-param-reassign */
/**
 * @param {number} x
 * @return {boolean}
 */

const revInt = (x) => {
  let res = 0;
  while (x > 0) {
    res = res * 10 + (x % 10);
    x = parseInt(x / 10, 10);
  }
  return res;
};

// ALternate solution without converting the number to a string
// eslint-disable-next-line no-unused-vars
const isPalindromeAlternate = (x) => {
  if (x < 0) {
    return false;
  }
  return x === revInt(x);
};

const isPalindrome = (x) => {
  const rev = x.toString().split('').reverse().join('');
  return x.toString() === rev;
};

export default isPalindrome;
