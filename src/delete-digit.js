const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arrN = `${n}`.split('');
  let indexOfMin = arrN.length - 1;
  for (let i = 0; i < arrN.length - 1; i++) {
    if (arrN[i] < arrN[i + 1]) {
      indexOfMin = i;
      break;
    }
  }
  arrN.splice(indexOfMin, 1);
  return +(arrN.join(''));
}

module.exports = {
  deleteDigit
};
