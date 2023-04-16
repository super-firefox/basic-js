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
  let result = "";
  let currentChar = "";
  let num, elem;
  for(let i = 0; i < str.length; i++) {
    elem = str[i];
    if(elem !== currentChar) {
      currentChar = elem;
      num = getCountChars(str.slice(i), elem);
      if(num > 1) {
        result += num + elem;
      } else {
        result += elem;
      }
    }
  }
  return result;
}

function getCountChars(str, elem) {
  let count = 0;
  for(let i=0; i < str.length; i++) {
    if(str[i] === elem){
      count++;
    } else {
      break;
    }
  }
  return count;
}

module.exports = {
  encodeLine
};
