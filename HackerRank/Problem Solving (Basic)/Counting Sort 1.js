function countingSort(arr) {
  const newArr = new Array(100).fill(0);
  arr.forEach(x => {newArr[x]++});
  return newArr;
}