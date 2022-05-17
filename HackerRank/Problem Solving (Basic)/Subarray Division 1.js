function birthday(s, d, m) {
  if (s.length === 1) {
    return s[0] === d ? 1 : 0;
  }

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    let len = 0;
    for (let j = i; j < s.length; j++) {
      sum += s[j];
      len++;

      if (sum >= d) {
        if (sum === d && len === m) {
          count++;
        }
        sum = 0;
        len = 0;
      }
    }
  }

  return count;
}