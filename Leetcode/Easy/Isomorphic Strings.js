/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 10^4
t.length == s.length
s and t consist of any valid ascii character.
*/

// var isIsomorphic = function (s, t) {
//   const hash = {};

//   for (let i = 0; i < s.length; i++) {
//     if (hash[t[i]] === undefined && !Object.values(hash).includes(s[i])) hash[t[i]] = s[i];
//     else if (hash[t[i]] !== s[i]) return false;
//   }

//   return true;
// };

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!mapST.has(s[i]) && !mapTS.has(t[i])) {
      mapST.set(s[i], t[i]);
      mapTS.set(t[i], s[i]);
    } else if (mapST.get(s[i]) === t[i] && mapTS.get(t[i]) === s[i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
