/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const sorted = [];
  let word = '';
  s = s.trim();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      if (word !== '') {
        sorted.unshift(word);
        word = '';
      }
      continue;
    }

    word += s[i];

    if (i === s.length - 1) sorted.unshift(word);
  }

  return sorted.join(' ');
};
