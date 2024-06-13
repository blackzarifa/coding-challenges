/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;

  let jumps = 0,
    currentMax = 0,
    maxDistance = 0;

  for (let i = 0; i < nums.length; i++) {
    maxDistance = Math.max(maxDistance, i + nums[i]);

    if (i === currentMax) {
      currentMax = maxDistance;
      jumps++;
    }

    if (currentMax >= nums.length - 1) break;
  }

  return jumps;
};
