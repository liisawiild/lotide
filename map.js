// this function will take (array, callback)
// and will return new array with element that have passed through the callback

const map = function(array, callback) {
  
  let results = [];
    for (let item of array) {
      results.push(callback(item));
    }
  return results;
};

module.exports = map;