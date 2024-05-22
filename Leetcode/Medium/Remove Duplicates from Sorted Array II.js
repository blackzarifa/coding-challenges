/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length < 3) return nums.length;

  let j = 2;
  let prev2 = undefined;

  for (let i = 2; i < nums.length; i++) {
    prev2 = nums[j - 2];

    if (nums[i] !== prev2) {
      nums[j] = nums[i];
      j++;
    }
  }

  return j;
};
