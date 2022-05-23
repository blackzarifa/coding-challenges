function maxMin(k, arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  let unfairness = Number.MAX_VALUE;

  for (let i = 0; i <= arr.length - k; i++) {
    let currentUnfairness = sortedArr[i + k - 1] - sortedArr[i];
    if (currentUnfairness < unfairness)
      unfairness = currentUnfairness;
  }

  return unfairness;
}