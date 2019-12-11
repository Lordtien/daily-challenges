/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */

const magnitude = (val) => {
  if (val < 0) {
    return 0 - val;
  }
  return val;
};

const cacher = (dividend, divisor) => {
  const cache = [];
  let quotient = 1;
  while (dividend >= divisor) {
    cache.push([divisor, quotient]);
    // eslint-disable-next-line no-param-reassign
    divisor += divisor;
    quotient += quotient;
  }
  return cache;
};

const divide = (dividend, divisor) => {
  if (dividend === 0) {
    return 0;
  }
  let quotient = 0;

  const returnfunc = (val) => {
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
      if (val > 2147483648) {
        // eslint-disable-next-line no-param-reassign
        val = 2147483648;
      }
      return 0 - val;
    }
    if (val > 2147483647) {
      // eslint-disable-next-line no-param-reassign
      val = 2147483647;
    }
    return val;
  };

  let dividendMag = magnitude(dividend);
  const divisorMag = magnitude(divisor);
  const cache = cacher(dividendMag, divisorMag);
  while (dividendMag >= divisorMag) {
    for (let i = cache.length - 1; i > -1; i -= 1) {
      if (dividendMag >= cache[i][0]) {
        dividendMag -= cache[i][0];
        quotient += cache[i][1];
      }
    }
  }
  return returnfunc(quotient);
};

export default divide;
