/**this function takes in an array and a boolean callback
 * and returns a new array with elements from the input array 
 * that resulted in true after being passed through the 
 * callback */


const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {    
    if(!callback(item)) {             
        results.push(item);
      } else {
        break;            
    }
  }
  return results;
};

module.exports = takeUntil;