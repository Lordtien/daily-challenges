/**
 * @param {number[]} height
 * @return {number}
 */
const min = (i, j) => (i < j ? i : j);

const maxArea = (height) => {
  let max = 0;
  for (let i = 0; i < height.length - 1; i += 1) {
    for (let j = i + 1; j < height.length; j += 1) {
      const minVal = min(height[i], height[j]);
      if (minVal * (j - i) > max) {
        max = minVal * (j - i);
      }
    }
  }
  return max;
};

export default maxArea;
