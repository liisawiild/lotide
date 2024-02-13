const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  console.log({array, newArray}); // this returns the original and resulting array
  return newArray;
};

let abcArray = ["a", "b", "c"];
let emptyArray = [];
let oneArray = [2];

const result = tail(abcArray);
assertEqual(abcArray.length, 3);
assertEqual(result.length, 2);
assertEqual(result[0], "b");

const emptyResult = tail(emptyArray);
assertEqual(emptyArray.length, 0);
assertEqual(emptyResult.length, 0);
assertEqual(emptyResult[0], undefined);

const oneResult = tail(oneArray);
assertEqual(oneArray.length, 1);
assertEqual(oneResult.length, 0);
assertEqual(oneResult[0], undefined);