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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if((typeof sampleActivity) != 'string') return false;
  // let k = Math.round();
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.round(0.693 * (sampleActivity / MODERN_ACTIVITY) / k);
  // return Math.round(Math.log(2) * ((sampleActivity / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD)));

  // return Math.round((MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)); 
  return Math.round((sampleActivity / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD)); 
}

module.exports = {
  dateSample
};
