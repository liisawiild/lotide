/**this function takes in an object and a value.
 * the function identifies all keys in the object
 * are paired with the input value. */

const findKeyByValue = function(obj, value) {
  for (const key in obj) { 
    if ((obj)[key] === value) { 
      return key;
    }
  } return undefined; 
};

module.exports = findKeyByValue;

