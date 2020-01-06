/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s) => {
  if (s === '') {
    return 0;
  }
  let i = s.length - 1;
  let x = -1;
  for (; i > -1; i -= 1) {
    if (s[i] === ' ') {
      if (x > -1) {
        return x - i;
      }
    } else if (x === -1) {
      x = i;
    }
  }
  return x - i;
};

export default lengthOfLastWord;
