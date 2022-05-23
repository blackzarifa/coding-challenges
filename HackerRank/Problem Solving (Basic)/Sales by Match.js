function sockMerchant(n, ar) {
  let pairs = 0;
  ar = ar.sort((a, b) => a - b);

  for (let i = 1; i < n; i++) {
    if (ar[i - 1] === ar[i]) {
      pairs++;
      i++;
    }
  }

  return pairs;
}