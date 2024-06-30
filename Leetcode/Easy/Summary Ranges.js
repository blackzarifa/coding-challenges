/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i] + 1) {
      let j = i + 1;

      while (nums[j + 1] === nums[j] + 1) j++;

      arr.push(`${nums[i]}->${nums[j]}`);

      i += j - i;
      continue;
    }

    arr.push(`${nums[i]}`);
  }

  return arr;
};
