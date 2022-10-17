const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(/*str, options*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!options.separator){
    options.separator = '+';
  }
  if(!options.additionSeparator){
    options.additionSeparator = '|';
  }

  // let string = str.toString();
  // let addition = options.addition.toString();
  
  let addStr = '';
  
  // function getAddition(){
  //   while(options.additionRepeatTimes > 1){
  //     options.additionRepeatTimes--;
  //     addStr += options.addition.toString() + options.additionSeparator;
  //   }
  // }
  getAddition()

  let lengthSepAdd = options.additionSeparator.length;
  let additionString = addStr.split('').filter((elem, index, arr) => elem[index] < arr[length - lengthSepAdd - 1]);

  let answer = '';
  while(options.repeatTimes > 1){
    
    answer += String(str) + additionString + options.separator;
    options.repeatTime--;
  }

  return answer;
}

module.exports = {
  repeater
};
