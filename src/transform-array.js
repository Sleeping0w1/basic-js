const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  
  let result = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-prev") {
      result[i - 1] = undefined;
      result[i] = undefined;
    } else if (arr[i] === "--discard-next") {
      result[i + 1] = undefined;
      result[i] = undefined;
    } else if (arr[i] === "--double-prev") {
      result[i] = result[i - 1]
    } else if (arr[i] === "--double-next") {
      result[i] = arr[i + 1];
    }
  }
  result = result.filter(el => el !== undefined);
  return result;
}

module.exports = {
  transform,
};
