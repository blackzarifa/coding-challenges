function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let neutral = 0;
  
  arr.forEach(x => x > 0 ? positive++ : x < 0 ? negative++ : neutral++);
  
  console.log(`${(positive / arr.length).toFixed(6)}
      ${(negative / arr.length).toFixed(6)}
      ${(neutral / arr.length).toFixed(6)}`);
}