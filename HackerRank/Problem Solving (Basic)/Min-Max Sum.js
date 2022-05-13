function miniMaxSum(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let min = sortedArr.reduce((prev, curr, i) => {
      if (i < 4)
          return prev += curr;
      return prev;
  }, 0);
  let max = sortedArr.reduce((prev, curr, i) => {
      if (i > 0)
          return prev += curr;
      return prev;
  }, 0);
  
  console.log(`${min} ${max}`);
}