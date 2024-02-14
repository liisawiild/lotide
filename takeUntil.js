const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {    
    if(!callback(item)) {      // callback only receives one value, the item in the array       
        results.push(item);
      } else {
        break;        // will loop until the callback returns truthy    
    }
  }
  return results;
};

module.exports = takeUntil;