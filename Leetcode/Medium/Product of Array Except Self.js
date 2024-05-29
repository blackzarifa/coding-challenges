/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const len = nums.length;
  const left = Array(len).fill(1);
  const right = Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    left[i] = left[i - 1] * nums[i - 1];
    right[len - i - 1] = right[len - i] * nums[len - i];
  }

  return left.map((num, i) => num * right[i]);
};
