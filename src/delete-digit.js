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
  console.log(n.toString());
  const str = n.toString();
  let max = 0;
  for(let i = 0; i < str.length; i++) {
    let sp = str.split("");
    sp.splice(i,1);
    max = Math.max(sp.join(""), max);
  }
  return max;
}

module.exports = {
  deleteDigit
};
