function pageCount(n, p) {
  let firstToP = Math.ceil((p - 1) / 2);
  let lastToP = n % 2 ? Math.floor((n - p) / 2) : Math.ceil((n - p) / 2);

  return firstToP > lastToP ? lastToP : firstToP;
}