/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = new Map();

  for (i = 0; i < nums.length; i++) {
    map.has(nums[i])
      ? map.set(nums[i], map.get(nums[i]) + 1)
      : map.set(nums[i], 1);

    if (map.get(nums[i]) > nums.length / 2) return nums[i];
  }
};
