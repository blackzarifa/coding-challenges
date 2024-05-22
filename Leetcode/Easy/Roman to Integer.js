/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const nums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  if (s.length === 1) return nums[s[0]];

  let char = '';
  let nextChar = '';
  let val = 0;

  for (let i = 0; i < s.length; i++) {
    char = s[i];
    nextChar = s[i + 1];
    if (nextChar && nums[char] < nums[nextChar]) {
      val -= nums[char];
    } else {
      val += nums[char];
    }
  }

  return val;
};
