/* eslint-disable no-param-reassign */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let sign = 1;
  let result = 0;
  if (x < 0) {
    sign = -1;
    x *= -1;
  }
  while (x > 0) {
    result = result * 10 + (x % 10);
    x = parseInt(x / 10, 10);
  }
  if (result * sign > 2147483647 || result * sign < -2147483648) {
    return 0;
  }
  return result * sign;
};

export default reverse;
