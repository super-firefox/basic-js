const { NotImplementedError } = require('../extensions/index.js');

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
 * `--discard-next` исключает следующий за ней элемент исходного массива из преобразованного массива.
* `--discard-prev` исключает предшествующий ей элемент исходного массива из преобразованного массива.
* `--double-next` дублирует следующий за ней элемент исходного массива в преобразованном массиве.
* `--double-prev` дублирует предшествующий ей элемент исходного массива в преобразованном массиве.

 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const len = arr.length;
  const transformArray = [];
  for(let i = 0; i < len; i++) {
    if(arr[i] === '--discard-next') {
      if(i < len - 1 ) {
        i = i + 1;
      };
    } else if(arr[i] === '--discard-prev') {
      if(i > 0) {
        if(i - 2 > 0 && arr[i - 2] === '--discard-next') {

        } else {
          transformArray.pop();
        }
        
      } 
    } else if(arr[i] === '--double-next') {
      if(len-1 > i) transformArray.push(arr[i+1]);
    } else if(arr[i] === '--double-prev') {
      if(i > 0) {
        if(i - 2 > 0 && arr[i - 2] === '--discard-next') {

        } else {
          transformArray.push(arr[i-1]);
        }
      }
    } else {
      transformArray.push(arr[i]);
    }
  }
  return transformArray;
}

module.exports = {
  transform
};
