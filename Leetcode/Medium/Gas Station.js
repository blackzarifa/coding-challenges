/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sum = gas.reduce((acc, curr, i) => acc + (curr - cost[i]), 0);
  if (sum < 0) return -1;

  let index = 0,
    currentGasCost = 0;

  for (let i = 0; i < gas.length; i++) {
    currentGasCost += gas[i] - cost[i];
    if (currentGasCost < 0) {
      index = i + 1;
      currentGasCost = 0;
    }
  }

  return index;
};
