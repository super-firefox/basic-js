const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

function dateSample(sampleActivity) {
  if(typeof (sampleActivity) === 'string' && +sampleActivity) {
    const k = 0.693/HALF_LIFE_PERIOD;
    const n = Math.log(sampleActivity/MODERN_ACTIVITY);
    const t = Math.ceil(-n/k);
    if(t >= 0) return t;
    return false;
  }
  return false
}

module.exports = {
  dateSample
};
