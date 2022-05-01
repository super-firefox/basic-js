const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(arguments.length === 0) {
    return 'Unable to determine the time of year!'
  }

  if( Object.keys(date).length > 1 || !date) {
    throw new Error('Invalid date!');
  }
  
  try {
    let month = date.getMonth();

      switch (month) {
        case 0:
        case 11:
        case 1:
          return 'winter';
        case 3:
        case 4:
        case 2:
          return 'spring';
        case 6:
        case 7:
        case 5:
          return 'summer';
        case 9:
        case 10:
        case 8:
          return 'autumn';
      }
  } catch (error) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
