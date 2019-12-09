/**
 * @param {string} s
 * @return {number}
 */

// eslint-disable-next-line no-unused-vars
const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let currString = '';
  for (let i = 0; i < s.length; i += 1) {
    if (currString.indexOf(s[i]) !== -1) {
      if (currString.length > max) {
        max = currString.length;
      }
      currString = currString.slice(currString.indexOf(s[i]) + 1).concat(s[i]);
    } else {
      currString = currString.concat(s[i]);
    }
  }
  return (max > currString.length ? max : currString.length);
};

export default lengthOfLongestSubstring;
