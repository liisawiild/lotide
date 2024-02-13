const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } 
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}

//create a map function that will take (array, callback)
//return new array with element that have passed through the callback

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  
  let results = [];
    for (let item of array) {
      results.push(callback(item));
    }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map((["as", "soon", "as", "possible"]), word => word[0]), ["a", "s", "a", "p"]);
assertArraysEqual(map((["ready", "set", "go"]), word => word[0]), ["r", "s", "g"]);
assertArraysEqual(map((["we", " ", "they"]), word => word[0]), [ "w", " ", "t"]);

