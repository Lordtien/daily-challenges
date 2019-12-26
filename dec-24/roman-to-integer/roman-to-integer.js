/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  let val = 0;
  let lastVal = 9999;
  const dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (let i = 0; i < s.length; i += 1) {
    if (dict[s[i]] <= lastVal) {
      lastVal = dict[s[i]];
      val += lastVal;
    } else {
      val += dict[s[i]];
      val -= lastVal * 2;
      lastVal = dict[s[i]];
    }
  }
  return val;
};

export default romanToInt;
