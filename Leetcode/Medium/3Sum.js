/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];

      if (sum < 0) {
        l++;
      } else if (sum > 0) {
        r--;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        l++;
        r--;
        while (nums[l] === nums[l - 1]) l++;
        while (nums[r] === nums[r + 1]) r--;
      }
    }
  }

  return res;
};
