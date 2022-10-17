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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!date) return 'Unable to determine the time of year!';
  if(Object.prototype.toString.call(date) !== '[object Date]') {
    // if(Object.prototype.toString.call(date) !== 'Object') {
    throw new Error('Invalid date!'); 
  } 

  const mounth = date.getMonth();
    if(mounth == 11 || mounth < 2){
      return 'winter';
    } else if(mounth > 1 && mounth < 5){
      return 'spring';
    } else if (mounth > 4 && mounth < 8){
      return 'summer';
    } else {
      return 'autumn';
    } 
}

module.exports = {
  getSeason
};
