/**this function will take an array and a callback as parameters;
 * the array will be passed through the callback, and a new 
 * array will returned reflecting the impacts of the callback function  */

const map = function(array, callback) {
  
  let results = [];
    for (let item of array) {
      results.push(callback(item));
    }
  return results;
};

module.exports = map;