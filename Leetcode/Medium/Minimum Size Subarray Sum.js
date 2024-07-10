/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let sum = 0,
    size = 0,
    minSize = Infinity;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    size++;

    while (sum >= target) {
      minSize = Math.min(minSize, size);

      if (minSize === 1) return minSize;

      sum -= nums[i - size + 1];
      size--;
    }
  }

  return minSize === Infinity ? 0 : minSize;
};
