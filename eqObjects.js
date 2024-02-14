const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (const key of Object.keys(obj1)) { //the key is the first key in the array = in this example "color"
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) { //if the key's value an array
      if (!eqArrays(obj1[key], obj2[key])) { //run through our eqArray function to check if object key values (arrays) aren't equal
        return false;
      }
    } else {
      if (obj1[key] !== obj2[key]) { //and then it is pulling the key back into the object to find the value
        return false;
      }
    }
  } return true;
};

module.exports = eqObjects;

