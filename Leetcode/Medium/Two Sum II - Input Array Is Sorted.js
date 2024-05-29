/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = {};

  for (let i = 0; i < numbers.length; i++) {
    let targetVal = map[target - numbers[i]];
    if (targetVal !== undefined) return [targetVal + 1, i + 1];

    map[numbers[i]] = i;
  }
};
