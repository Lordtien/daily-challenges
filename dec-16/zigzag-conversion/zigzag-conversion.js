/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const checkAndConcat = (subS, i, s) => {
  if (s[i] !== undefined) {
    return subS.concat(s[i]);
  }
  return subS;
};

const formRowN = (x, n, s) => {
  let newS = '';
  let i = x;
  if (x === 0 || x === n - 1) {
    while (i <= s.length) {
      newS = checkAndConcat(newS, i, s);
      i += (2 * n - 2);
    }
  } else {
    const firstJ = (2 * n - 2) - 2 * x;
    const secondJ = (2 * n - 2) - firstJ;
    newS = checkAndConcat(newS, x, s);
    while (i <= s.length) {
      i += firstJ;
      newS = checkAndConcat(newS, i, s);
      i += secondJ;
      newS = checkAndConcat(newS, i, s);
    }
  }
  return newS;
};

const convert = (s, numRows) => {
  if (s.length <= 1) {
    return s;
  }
  if (numRows === 1) {
    return s;
  }
  let convertedS = '';
  for (let i = 0; i < numRows; i += 1) {
    convertedS = convertedS.concat(formRowN(i, numRows, s));
  }
  return convertedS;
};

export default convert;
