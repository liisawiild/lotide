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




// new function which returns a subset of an array

let testArray = [1, 2, 1, 2, 3, 4, 5, 3, 1, 2];
let testRemove = [2, 3];

const without = function(sourceArray, itemsToRemove) {
  let arrayItemsRemoved = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (itemsToRemove.includes(sourceArray[i]) === false) {
      arrayItemsRemoved.push(sourceArray[i]);
    }
  } return arrayItemsRemoved;
};

console.log(without(testArray, testRemove));
assertArraysEqual(without([24, 3, 16, 24, 56], [24]), [3, 16, 56]);
assertArraysEqual(testArray, [1, 2, 1, 2, 3, 4, 5, 3, 1, 2]);







// INITIAL TRY WITHOUT PROTOTYPE FUNCTIONS
// const without = function(sourceArray, itemsToRemove) {
//   let arrayItemsRemoved = [];
//   for (let i = 0; i < sourceArray.length; i++) {
//     for (let ii = 0; ii < itemsToRemove.length; i++) {
//       if (sourceArray[i] != itemsToRemove[ii]) {
//         arrayItemsRemoved.push(sourceArray[i]);
//       }
//     }
//   } return arrayItemsRemoved;
//loop through sourceArray
//for each loop, loop through itemsToRemove
//if sourceArray[i] = itemsToRemove[i]
//arrayItemsRemoved.push(sourceArray[i])
// else do nothing