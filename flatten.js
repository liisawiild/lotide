const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//new function

const flatten = function(array) {
let flatArray = [];
for (let i = 0; i < array.length; i++) {
  if (Array.isArray(array[i])) {
   flatArray = flatArray.concat(array[i]);
    }
   else {
      flatArray.push(array[i]);
  } 
} return flatArray;
};
//TEST CODE
const myArray = [1, 2, [3, 4], 5, [6, 7], 6];
console.log(flatten(myArray));