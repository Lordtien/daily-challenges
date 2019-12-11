/**
 * @param {number[]} numbs
 * @param {number} val
 * @return {number}
 */
const removeElement = (numbs, val) => {
  let count = 0;
  for (let i = 0; i < numbs.length; i += 1) {
    if (numbs[i] === val) {
      count += 1;
    } else {
      // eslint-disable-next-line no-param-reassign
      numbs[i - count] = numbs[i];
    }
  }
  return numbs.length - count;
};

export default removeElement;
