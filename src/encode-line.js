const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  let newStr = ''
  let arrStr = str.split('');

  for(let i = 0; i < arrStr.length; i++){
    let num = 1;
    let nextElem = i + 1;
    while(nextElem < arrStr.length){
      if(arrStr[i] == arrStr[nextElem]){
        num++;
        nextElem++;
      } else {      
        break;
      }
    }
    if(num == 1){
      newStr += arrStr[i]
    } else {
      newStr += num + arrStr[i];
    }   
    i = nextElem - 1;
  }
  return newStr;
}
  



module.exports = {
  encodeLine
};
