/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  if (n === 1) {
    return '1';
  }
  const lastStr = countAndSay(n - 1);
  let lastNum = lastStr[0];
  let count = 1;
  let res = '';
  for (let i = 1; i < lastStr.length; i += 1) {
    if (lastStr[i] !== lastNum) {
      res += count + lastNum;
      count = 1;
      lastNum = lastStr[i];
    } else {
      count += 1;
    }
  }
  return res + count + lastNum;
};

export default countAndSay;
