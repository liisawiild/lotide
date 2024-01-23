const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//inputs = an array
let testArray = ["a", "b", "c"];

//processing
const head = function(array) {
  return array[0];
};


//output
console.log(head(testArray));

assertEqual(head([1,2,3]), 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");