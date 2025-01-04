const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = str.replace(/([a-z])\1*/g, (substr) => {
    return (substr.length > 1 ? substr.length : '') + substr[0];
  })
  return result;
}

module.exports = {
  encodeLine
};
