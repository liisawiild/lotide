const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } 
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

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

