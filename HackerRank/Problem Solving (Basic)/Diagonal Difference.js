function diagonalDifference(arr) {
  let diag1 = 0;
  let diag2 = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) 
        diag1 += arr[i][j];
      if (i + j === arr.length - 1) 
        diag2 += arr[i][j];
    }
  }
  return Math.abs(diag1  - diag2);
}