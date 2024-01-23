/* Lotide is the first project where we are working to create a library, which
will be a clone of the commonly used Lodash library */



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lisa", "Lisa");
assertEqual(1, 1);
assertEqual(2, 3);


