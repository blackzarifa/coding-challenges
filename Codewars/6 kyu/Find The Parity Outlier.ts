/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

Examples

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

export function findOutlier(integers: number[]): number {

  function isOdd(x: number): boolean {
    return Math.abs(x) % 2 === 1;
  }

  const odd: number[] = [], even: number[] = [];

  for (let i = 0; i <= integers.length; i++) {
    if (odd.length === 0 || even.length === 0) {
      isOdd(integers[i]) ? odd.unshift(integers[i]) : even.unshift(integers[i]);
    } else if (odd.length === 1 && even.length === 1) {
      return isOdd(integers[i]) ? even[0] : odd[0];
    } else {
      return odd.length === 1 ? odd[0] : even[0];
    }
  }

  return 0;
}