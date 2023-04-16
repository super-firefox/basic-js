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
  const arr1 = s1.split("").sort();
  const arr2 = s2.split("").sort();
  let count = 0;
  for(let i=0; i < arr1.length; i++) {
    let currentElem = arr1[i];
    if((i===0 || arr1[i-1] !== currentElem) && arr2.find(elem => elem === currentElem)) {
      console.log(getCountChars(arr1, currentElem));
      count = count + Math.min(getCountChars(arr1, currentElem), getCountChars(arr2, currentElem))
    }
  }
  console.log(arr1, arr2)
  return count;
}

function getCountChars(arr, elem) {
  let count = 0;
  for(let i=0; i < arr.length; i++) {
    if(arr[i] === elem) count++;
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
