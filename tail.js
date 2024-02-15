/**this function takes in an array, removes the first
 * element, and returns a new array with the remaining 
 * elements of the input array. */

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};

module.exports = tail;