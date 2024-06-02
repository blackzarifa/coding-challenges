/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const map = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  const list = [];

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      list.push(s[i]);
      continue;
    }

    const pop = list.pop();
    if (map[pop] === s[i]) continue;
    return false;
  }

  return list.length === 0;
};
