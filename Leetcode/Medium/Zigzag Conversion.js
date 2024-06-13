/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const arr = Array(numRows).fill('');
  let down = false;
  let row = 0;

  for (let i = 0; i < s.length; i++) {
    if (row === 0 || row === numRows - 1) down = !down;

    arr[row] += s[i];
    row = down ? row + 1 : row - 1;
  }

  return arr.join('');
};
