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



const letterPositions = function(sentence) {
  const results = {};
  let characterIndex = 0;
  // loop through the sentence
  for (let character of sentence) {
  // if the character is a not a " " and
    if (character !== " ") {
      if (results[character]) {
        results[character].push(characterIndex); 
      } else {
        results[character] = [characterIndex]; 
      }
    }
    characterIndex++;
  }
  return results;
};



// TEST CODE
assertArraysEqual(letterPositions("chips").i, [2]);
assertArraysEqual(letterPositions("audrey wild").d, [2, 10]);
assertArraysEqual(letterPositions("fuzzy wuzzy").z, [2, 3, 8, 9]);



