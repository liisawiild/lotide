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


// NEW FUNCTION


const middle = function(array) {
  let midArray = [];
  let length = array.length;
  let oddMidpoint = Math.floor(length / 2);
  if (length <= 2) {
    return midArray;
  } else if (length % 2 !== 0) {
    midArray.push(array[oddMidpoint]);
  } else if (length % 2 === 0) {
    midArray.push(array[oddMidpoint - 1], array[oddMidpoint]);
  }
  return midArray;
};

// let myArray = [1, 2, 3, 4, 5, 8, 9, 7, 5, 6 ,1]
// console.log(middle(myArray));

let array2 = [1, 2, 3, 4];
console.log(middle(array2));