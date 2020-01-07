/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = (prices) => {
  let lastVal = prices[0];
  let flag = 0;
  let totProf = 0;
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] <= prices[i - 1]) {
      if (flag !== 0) {
        totProf += prices[i - 1] - lastVal;
        flag = 0;
      }
      lastVal = prices[i];
      flag = 1;
    } else {
      flag = 1;
    }
  }
  if (flag === 1) {
    totProf += prices[prices.length - 1] - lastVal;
  }
  return totProf;
};

export default maxProfit;
