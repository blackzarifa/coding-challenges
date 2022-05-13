/*
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

function expandedForm(num) {
  const arr = Array.from(String(num), Number);
  const expanded = arr.map((x, i) => {
    if (x !== 0) {
      zeros = arr.length - 1 - i;
      return i === 0 ? (`${x}` + '0'.repeat(zeros)) : (` + ${x}` + '0'.repeat(zeros))
    }
  });
  
  return expanded.join('');
}