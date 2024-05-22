/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length === 1) return nums;

  k = k % nums.length;

  const arr = nums.slice(nums.length - k);
  nums.splice(nums.length - k);
  nums.unshift(...arr);

  return nums;
};
