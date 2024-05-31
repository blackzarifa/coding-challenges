/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const mapPS = new Map();
  const mapSP = new Map();
  const sArr = s.split(' ');

  if (sArr.length !== pattern.length) return false;

  for (let i = 0; i < sArr.length; i++) {
    let pi = pattern[i];
    let si = sArr[i];

    if (!mapPS.has(pi) && !mapSP.has(si)) {
      mapPS.set(pi, si);
      mapSP.set(si, pi);
    } else if (mapPS.get(pi) === si && mapSP.get(si) === pi) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
var wordPattern = function (pattern, s) {
  const mapPS = new Map();
  const mapSP = new Map();
  const sArr = s.split(' ');

  if (sArr.length !== pattern.length) return false;

  for (let i = 0; i < sArr.length; i++) {
    let pi = pattern[i];
    let si = sArr[i];

    if (!mapPS.has(pi) && !mapSP.has(si)) {
      mapPS.set(pi, si);
      mapSP.set(si, pi);
    } else if (mapPS.get(pi) === si && mapSP.get(si) === pi) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
