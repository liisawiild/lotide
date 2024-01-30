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

let myString = "lisa wild";

const letterPositions = function(sentence) {
  const results = {};
  let characterIndex = 0;
  // loop through the sentence
  for (let character of sentence) {
  // if the character is a not a " " and
    if (character !== " ") {
      if (results[character]) {
        results[character].push(characterIndex); // add key and array with value pair (if not yet appeared)
      } else {
        results[character] = [characterIndex]; // if not yet in object, add it with an array
      }
    }
    characterIndex++;
  }
  return results;
};

console.log(letterPositions(myString));

// TEST CODE
assertArraysEqual(letterPositions("chips").i, [2]);
assertArraysEqual(letterPositions("audrey wild").d, [2, 10]);
assertArraysEqual(letterPositions("fuzzy wuzzy").z, [2, 3, 8, 9]);



