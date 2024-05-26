/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let minPrice = Infinity;

  prices.forEach((p) => {
    if (p < minPrice) {
      minPrice = p;
    } else {
      profit += p - minPrice;
      minPrice = p;
    }
  });

  return profit;
};
