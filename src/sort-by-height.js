const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortNums = arr.filter(value => value !== -1).sort((a, b) => a - b);
  const sortArr = [];
  
  slide = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] === -1) {
      slide++;
      sortArr.push(arr[i]);
    } else {
      sortArr.push(sortNums[i - slide]);
    }
  }
  console.log(sortArr);
  return sortArr;
}

module.exports = {
  sortByHeight
};
