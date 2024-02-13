/* Lotide is the first project where we are working to create a library, 
   which will be a clone of the commonly used Lodash library */

//this function can only compare primitive values, not structures

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertEqual;
