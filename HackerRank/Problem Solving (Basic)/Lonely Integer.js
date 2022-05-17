function lonelyinteger(a) {
  const set1 = new Set();
  const set2 = new Set();
  let res = 0;

  a.forEach(x => {
    if (!set1.has(x)) {
      set1.add(x);
      set2.add(x);
    } else {
      set2.delete(x);
    }
  });
  
  set2.forEach(x => res = x);
  return res;
}