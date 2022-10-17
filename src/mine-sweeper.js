const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const matrixNum = [];
  for(let i = 0; i < matrix.length; i++){
    let arr = []
    for(let j = 0; j < matrix[i].length; j++){
      let sibl = 0;
      // if(matrix[i - 1] != undefined && matrix[i - i][j - 1] != undefined && matrix[i - i][j - 1] === true ){
      if(matrix[i - 1] != undefined && matrix[i - i][j - 1] != undefined && matrix[i - i][j - 1]){
        sibl++;
      }
      // if(matrix[i - 1] != undefined && matrix[i - 1][j] != undefined && matrix[i - 1][j] === true){
        if(matrix[i - 1] != undefined && matrix[i - 1][j] != undefined && matrix[i - 1][j]){
        sibl++;
      }
      // if(matrix[i - 1] != undefined && matrix[i - 1][j + 1] != undefined && matrix[i - 1][j + 1] === true){
      if(matrix[i - 1] != undefined && matrix[i - 1][j + 1] != undefined && matrix[i - 1][j + 1]){
        sibl++;
      }
      // if(matrix[i][j - 1] != undefined && matrix[i][j - 1] === true){
      if(matrix[i][j - 1] != undefined && matrix[i][j - 1]){  
        sibl++;
      }
      // if(matrix[i][j + 1] != undefined && matrix[i][j + 1] === true){
      if(matrix[i][j + 1] != undefined && matrix[i][j + 1]){  
        sibl++;
      }
      // if(matrix[i + 1] != undefined && matrix[i + 1][j - 1] != undefined && matrix[i + 1][j - 1] === true){
      if(matrix[i + 1] != undefined && matrix[i + 1][j - 1] != undefined && matrix[i + 1][j - 1]){
        sibl++;
      }
      // if(matrix[i + 1] != undefined && matrix[i + 1][j] === true){
      if(matrix[i + 1] != undefined && matrix[i + 1][j]){
        sibl++;
      }
      // if(matrix[i + 1] != undefined && matrix[i + 1][j + 1] != undefined && matrix[i + 1][j + 1] === true){
      if(matrix[i + 1] != undefined && matrix[i + 1][j + 1] != undefined && matrix[i + 1][j + 1]){  
        sibl++;
      }    
      arr.push(sibl)
    }
    matrixNum.push(arr);
  }
  return matrixNum;
}

module.exports = {
  minesweeper
};
// *   [true, false, false],
//  *  [false, true, false],
//  *  [false, false, false]

// 1: i = 0, j = 0, sibl = 0, arr = []
//  1.1: i-1 = undef;
//  1.2: i-1 = undef;
//  1.3: i-1 = undef;
//  1.4: i = 0, j-1 = undef;
//  1.5: i = 0, j = 1 == false, sibl = 0;
//  1.6: i = 1, j -1 == undef;
//  1.7: i = 1, j = 0 == udnef;
//  1.8: i = 1, j = 1 == true, sibl = 1
// arr[1]

//2: i = 0, j = 1, sibl = 0, arr = [1]
//  2.1: i-1 = undef;
//  2.2: i-1 = undef;
//  2.3: i-1 = undef;
//  2.4: i = 0, j-1 = true, sibl = 1;
//  2.5: i = 0, j+1 = false;
//  2.6: i = 1, j-1 = false;
//  2.7: i = 1, j = true, sibl = 2;
//  2.8: i = 1, j+1 == false
// arr[1, 2]

//3: i = 0, j = 2, sibl = 0, arr = [1, 2]
//  3.1: i-1 = undef;
//  3.2: i-1 = undef;
//  3.3: i-1 = undef;
//  3.4: i = 0, j-1 = false;
//  3.5: i = 0, j+1 = undef;
//  3.6: i = 1, j-1 = true, sibl = 1;
//  3.7: i = 1, j = false;
//  3.8: i = 1, j+1 == undef;
// arr[1, 2, 1]

//4: i = 1, j = 0, sibl = 0, matrixNUm = [[1, 2, 1]],
// arr = [];
//  4.1: i-1 = 0, j-1 = undef;
//  4.2: i-1 = 0, j = true, sibl = 1;
//  4.3: i-1 = 0, j+1 = false;
//  4.4: i = 1, j-1 = undef;
//  4.5: i = 1, j+1 = true, sibl = 2;
//  4.6: i = 2, j-1 = undef;
//  4.7: i = 2, j = false;
//  4.8: i = 1, j+1 = false;
// arr[[1, 2, 1]
//     [2,  ,  ]]


//7: i = 2, j = 0, sibl = 0, matrixNUm = [[1, 2, 1]],
// arr = [];
//  4.1: i-1 = 1, j-1 = undef;
//  4.2: i-1 = 1, j = false;
//  4.3: i-1 = 1, j+1 = true, sibl = 1;
//  4.4: i = 2, j-1 = undef;
//  4.5: i = 2, j+1 = false;
//  4.6: i + 1 = undef;
//  4.7: i + 1 = undef;
//  4.8: i + 1 = undef;
// arr[[1, 2, 1]
//     [2,  ,  ]
//     [1, , , ]]


//8: i = 2, j = 1, sibl = 0, 
//  8.1: i-1 = 1, j-1 = false;
//  8.2: i-1 = 1, j = true, sibl = 1;
//  8.3: i-1 = 1, j+1 = false;
//  8.4: i = 2, j-1 = false;
//  8.5: i = 2, j+1 = false;
//  8.6: i + 1 = undef;
//  8.7: i + 1 = undef;
//  8.8: i + 1 = undef;
// arr[[1, 2, 1]
//     [2,  ,  ]
//     [1, 1, , ]]