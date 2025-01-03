const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1.indexOf(s1[i]) === i && s2.includes(s1[i])){
      let s1Count = s1.split(s1[i]).length - 1;
      let s2Count = s2.split(s1[i]).length - 1;
      result += s1Count < s2Count ? s1Count : s2Count;
    }
  }
  return result;
}

module.exports = {
  getCommonCharacterCount
};
