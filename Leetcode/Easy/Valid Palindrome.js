/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const regex = /^[A-Za-z0-9]*$/;
  let newS = s
    .trim()
    .toLowerCase()
    .split('')
    .filter((char) => regex.test(char))
    .join('');

  return newS === newS.split('').reverse().join('');
};
