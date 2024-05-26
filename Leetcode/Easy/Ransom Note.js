/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const mapMg = {};

  magazine.split('').forEach((m) => {
    mapMg[m] ? mapMg[m]++ : (mapMg[m] = 1);
  });

  for (let i = 0; i < ransomNote.length; i++) {
    if (mapMg[ransomNote[i]] > 0) mapMg[ransomNote[i]]--;
    else return false;
  }

  return true;
};
