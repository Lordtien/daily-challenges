/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let min = prices[0]; let maxProf = 0;
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] - min > maxProf) {
      maxProf = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProf;
};

export default maxProfit;
