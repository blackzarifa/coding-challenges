/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;

  let min = prices[0],
    prft = 0;

  for (let i = 1; i < prices.length; i++) {
    prft = Math.max(prft, prices[i] - min);
    min = Math.min(min, prices[i]);
  }

  return prft;
};
