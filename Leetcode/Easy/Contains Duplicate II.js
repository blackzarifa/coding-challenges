/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 

Constraints:

1 <= nums.length <= 10^5
-109 <= nums[i] <= 10^9
0 <= k <= 10^5
*/

var containsNearbyDuplicate = function (nums, k) {
  const obj = nums.reduce((acc, num, index) => {
    if (Object.hasOwn(acc, num)) acc[num].push(index);
    else acc[num] = [index];

    return acc;
  }, {});

  for (let key in obj) {
    if (obj[key].length > 1) {
      for (let i = 0; i < obj[key].length - 1; i++) {
        for (let j = i + 1; j < obj[key].length; j++) {
          if (Math.abs(obj[key][i] - obj[key][j]) <= k) return true;
        }
      }
    }
  }

  return false;
};