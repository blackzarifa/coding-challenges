/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;

  const loopLimit = haystack.length - needle.length + 1;

  for (let i = 0; i <= loopLimit; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }

  return -1;
};
