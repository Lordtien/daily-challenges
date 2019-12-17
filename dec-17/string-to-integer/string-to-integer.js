/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  const trimmed = str.trim();
  let sign = 1;
  let value = 0;
  let i = 0;

  if (trimmed.length === 0) {
    return 0;
  }

  if (trimmed[0] === '-') {
    sign = -1;
    i += 1;
  } else if (trimmed[0] === '+') {
    i += 1;
  }

  while (trimmed[i] >= '0' && trimmed[i] <= '9') {
    value = value * 10 + parseInt(trimmed[i], 10);
    i += 1;
  }

  value *= sign;

  if (value > 2147483647) {
    return 2147483647;
  }
  if (value < -2147483648) {
    return -2147483648;
  }
  return value;
};

export default myAtoi;
