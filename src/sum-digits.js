const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
    let str = String(n);
    let sum = 0;
    for(let i = 0; i < str.length; i++){
      sum = +sum + +str[i];
    }
    if(String(sum).length > 1){
      let newSum = 0;
      let strSum = sum.toString()
      for(let k = 0; k < strSum.length; k++){
        newSum = newSum + +strSum[k];
      }
      if(String(newSum).length == 1){
        return newSum;
      }
    } else {
      return sum;
    }  
}

module.exports = {
  getSumOfDigits
};
