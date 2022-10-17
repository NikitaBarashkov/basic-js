const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrMax = []
  let str = n.toString();
  for(let i = 0; i < str.length; i++){
    let arr = n.toString().split('');
    arr.splice(i, 1);
    arrMax.push(arr.join(''));
  }  
  return +arrMax.sort((a, b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
