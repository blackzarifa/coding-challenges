/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/

var isValidSudoku = function (board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '.') continue;

      const box = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (
        set.has(`line ${i}: ${board[i][j]}`) ||
        set.has(`col ${j}: ${board[i][j]}`) ||
        set.has(`box ${box}: ${board[i][j]}`)
      ) return false;

      set.add(`line ${i}: ${board[i][j]}`);
      set.add(`col ${j}: ${board[i][j]}`);
      set.add(`box ${box}: ${board[i][j]}`);
    }
  }

  return true;
};