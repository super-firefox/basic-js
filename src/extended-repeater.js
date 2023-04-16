const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  console.log(">>>", str, options)
  let {repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|"} = options;
  let root = str + getSimpleRepeater(addition, additionSeparator,  additionRepeatTimes);
  let result = getSimpleRepeater(root, separator, repeatTimes)

  // if(repeatTimes > 1) {
  //     result += separator
  // }

  // result = result.repeat(repeatTimes-1)+str
  // result = result.repeat(additionRepeatTimes)
  console.log(">>> ", result)
  return result;
}

function getSimpleRepeater(str, sep, repeat) {
  let s = "";
  for(let i=0; i<repeat; i++) {
    if(i < repeat-1) {
      s += str + sep;
    } else {
      s += str
    }
  }
  return s;
}

module.exports = {
  repeater
};
