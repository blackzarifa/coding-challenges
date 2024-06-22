/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let maxLen = 0,
    count = 0,
    l = 0;

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
      count--;
    }

    set.add(s[r]);
    count++;
    maxLen = Math.max(maxLen, count);
  }

  return maxLen;
};
