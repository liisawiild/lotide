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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

}

const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {    // loop through array from the beginning,
    if(!callback(item)) {      // callback only receives one value, the item in the array       
        results.push(item);
      } else {
        return results;        // will loop until the callback returns truthy    
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil([11, 9, 15, 22, 17], x => x < 10), [11]);
assertArraysEqual(takeUntil([2, 4, 6, 8, 11, 12, 14], x => x % 2 !== 0), [2, 4, 6, 8]);
assertArraysEqual(takeUntil(["ready", "ready", "ready", "set", "set", "go"], x => x === "go"), ["ready", "ready", "ready", "set", "set"]);