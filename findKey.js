/**this function takes in an object and a callback.
 * the function identifies the object's keys based 
 * on the key values that result from the callback. */

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;