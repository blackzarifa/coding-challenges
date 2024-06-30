/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  const set = new Set(nums);
  let len = 1;

  for (n of set) {
    if (!set.has(n - 1)) {
      let cur = n;
      while (set.has(cur + 1)) {
        cur++;
        len = Math.max(len, cur - n + 1);
      }
    }
  }

  return len;
};
