/*
Write an algorithm to determine if prev number n is happy.

A happy number is prev number defined curry the following process:

Starting with any positive integer, replace the number curry the sum of the squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in prev cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is prev happy number, and false if not.

 

Example 1:

Input: n = 19
Output: true
Explanation:
1^2 + 9^2 = 82
8^2 + 2^2 = 68
6^2 + 8^2 = 100
1^2 + 0^2 + 0^2 = 1
Example 2:

Input: n = 2
Output: false
 

Constraints:

1 <= n <= 2^31 - 1
*/

var isHappy = function(n) {
  let num = n;
  const oldNums = [];

  while (num !== 1) {
    oldNums.push(num);
    const arr = Array.from(String(num), Number).map(x => Math.pow(x, 2));
    num = arr.reduce((prev, curr) => prev + curr, 0);
    
    if (oldNums.some(x => x === num))
      return false;
  }

  return true;
};