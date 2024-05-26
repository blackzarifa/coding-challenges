/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  if (nums.length === 1) return true;

  let goal = nums.length - 1;
  let canReachGoal = false;

  for (let i = nums.length - 2; i >= 0; i--) {
    canReachGoal = i + nums[i] >= goal;
    if (canReachGoal) goal = i;
  }

  return goal === 0;
};
