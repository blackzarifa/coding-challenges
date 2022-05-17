function twoArrays(k, A, B) {
  const sortedA = A.sort((a,b) => a-b);
  const sortedB = B.sort((a,b) => a-b).reverse();
  let res = sortedA.every((a, i) => a + sortedB[i] >= k) ? 'YES' : 'NO';
  
  return res;
}