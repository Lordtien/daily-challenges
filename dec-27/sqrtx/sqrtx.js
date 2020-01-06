/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  if (x === 1) {
    return 1;
  }
  let i = 1;
  for (; i * i <= x; i += 1);
  return i - 1;
};

export default mySqrt;
