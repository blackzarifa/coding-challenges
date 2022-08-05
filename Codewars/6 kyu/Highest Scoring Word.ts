/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

export const high = (str: string): string => {
  const words: string[] = str.split(' ');
  let highestScore: [string, number] = ['', 0];

  words.map(word => {
    let score: number = 0;

    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96;
    }

    if (score > highestScore[1]) highestScore = [word, score];
  });

  return highestScore[0];
}