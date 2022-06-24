/*
Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 10^4
s consists of English letters, digits, symbols and spaces.
*/

var lengthOfLongestSubstring = function (s) {
  let len = s.length;
  let biggestLength = 0;

  for (let i = 0; i < len; i++) {
    const chars = new Set();

    for (let j = i; j < len; j++) {
      if (chars.has(s[j])) break;

      chars.add(s[j]);
    }

    if (biggestLength < chars.size) biggestLength = chars.size;
  }

  return biggestLength;
};

console.log(lengthOfLongestSubstring('pwwkew'))