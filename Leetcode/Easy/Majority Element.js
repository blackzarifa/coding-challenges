/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};

  for (num of nums) {
    if (!map[num]) map[num] = 1;
    else map[num]++;
  }

  for (key in map) if (map[key] > nums.length / 2) return key;

  return 0;
};
