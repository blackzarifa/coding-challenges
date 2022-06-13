/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
 

Constraints:

1 <= s.length <= 10^5
s consists of only lowercase English letters.
*/

var firstUniqChar = function (s) {
  const map = new Map();

  s.split('').map(el => {
    if (!map.get(el)) map.set(el, 1);
    else map.set(el, map.get(el) + 1);
  });

  for (let [key, value] of map.entries()) {
    if (value === 1) return s.split('').findIndex(el => el == key);
  }

  return -1;
};