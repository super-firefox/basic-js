const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const renames = [];
  let name;
  for(let i = 0; i < names.length; i++) {
    name = names[i];
    if(getCountRepeat(names.slice(0, i), name) > 0) {
      name = `${name}(${getCountRepeat(names.slice(0, i), name)})`
    }

    for(let j = 0; j < renames.length; j++) {
      if(renames[j] === name) {
        name = name + "(1)"
      }
    }
    renames.push(name);
  }
  return renames;
}

function getCountRepeat(arr, elem) {
  return (arr.filter(e => e === elem)).length;
}

module.exports = {
  renameFiles
};
