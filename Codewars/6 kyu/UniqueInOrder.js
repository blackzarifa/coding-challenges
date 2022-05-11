/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/

var uniqueInOrder = function(iterable){
  arr = typeof(iterable) === 'string' ? iterable.split('') : iterable;
  
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === arr[i - 1]) {
      arr.splice(i, 1);
      console.log(arr);
      i--;
    }
  }
  
  return arr;
}