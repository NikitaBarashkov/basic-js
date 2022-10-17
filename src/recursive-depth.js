const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(/*arr*/) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const newArr = [];
    for(let elem of arr){
      if(elem == '[' || elem == ']'){
        newArr.push(elem);
      }
    }
    
    let num = 1;
    function howMany(array){
      for(let elem of array){
        // if(Array.isArray(elem)){
        if(typeof elem == 'object'){
          array.flat();
          num++;
          howMany(elem);
        } else {
          return num;
        }
      }
      return num;
    }
    howMany(newArr)
    // const newArr = arr.flat();
    // return newArr;
  }
}

module.exports = {
  DepthCalculator
};
