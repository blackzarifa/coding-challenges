/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []
*/

export function inArray(a1: string[], a2: string[]): string[] {
  const a2Copy = [...a2];
  const newArr = a1.filter(str => {
    for (let i = 0; i < a2Copy.length; i++) {
      const splitted = a2Copy[i].split(str);

      if (splitted.length !== 1) {
        a2Copy.splice(i, 1);
        return true;
      }
    }
    return false;
  });

  return newArr.sort();
}