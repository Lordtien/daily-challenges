/**
 * @param {string} s
 * @return {boolean}
 */
const revStr = (s) => {
  let rev = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    rev += s[i];
  }
  return rev;
};

const isPalindrome = (s) => {
  s = s.replace(/\W/g, '').toUpperCase();
  return s === revStr(s);
};

export default isPalindrome;
