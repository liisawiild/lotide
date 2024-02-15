/**this function takes in an array and returns a new
 * array that only contains the middle elements 
 * (array with even length = two elements; array with
 *  odd lenths one element) */


const middle = function(array) {
  let midArray = [];
  let length = array.length;
  let oddMidpoint = Math.floor(length / 2);
  if (length <= 2) {
    return midArray;
  } else if (length % 2 !== 0) {
    midArray.push(array[oddMidpoint]);
  } else if (length % 2 === 0) {
    midArray.push(array[oddMidpoint - 1], array[oddMidpoint]);
  }
  return midArray;
};

module.exports = middle;
