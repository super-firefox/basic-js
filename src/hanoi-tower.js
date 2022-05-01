const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  let acum = [];
  let sum = 0;
  let turns = 0;
  let seconds = 0;
    for(let i = 1; i <= disksNumber; i++) {
      acum.push(sum + i);
      sum = acum.reduce((prev, curr) => prev + curr, 0);
  }
    turns = acum[acum.length - 1];
    seconds = Math.floor(turns/turnsSpeed*3600);
    return {turns, seconds}
}

module.exports = {
  calculateHanoi
};
