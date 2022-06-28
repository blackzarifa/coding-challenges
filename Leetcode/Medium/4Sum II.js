/*
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

0 <= i, j, k, l < n
sum + nums3[k] + nums4[l] == 0
 

Example 1:

Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0
Example 2:

Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1
 

Constraints:

n == nums1.length
n == nums2.length
n == nums3.length
n == nums4.length
1 <= n <= 200
-2^28 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 2^28
*/

var fourSumCount = function (nums1, nums2, nums3, nums4) {
  const sum1 = {};
  const sum2 = {};
  let tuples = 0;

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      let sum = nums1[i] + nums2[j];
      Object.hasOwn(sum1, sum) ? sum1[sum]++ : sum1[sum] = 1;

      sum = nums3[i] + nums4[j];
      Object.hasOwn(sum2, sum) ? sum2[sum]++ : sum2[sum] = 1;
    }
  }
  console.log(sum1)
  console.log(sum2)

  for (let key in sum1) {
    let absKey = key > 0 ? -Math.abs(key) : Math.abs(key);

    if (Object.hasOwn(sum2, absKey))
      tuples += sum1[key] * sum2[absKey];
  }

  return tuples;
};