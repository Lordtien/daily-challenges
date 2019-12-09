/**
 * @param {number[]} numbs
 * @param {number} target
 * @return {number}
 */

const searchInsert = (numbs, target) => {
  for (let i = 0; i < numbs.length; i += 1) {
    if (numbs[i] === target || numbs[i] > target) {
      return i;
    }
  }
  return numbs.length;
};

export default searchInsert;
