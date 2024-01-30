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
  if(eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }

};

let myString = "Lisa Wild"

const letterPositions = function(sentence) {
  const results = {};
  let characterIndex = 0;
  // loop through the sentence
  for (let character of sentence) {

    characterIndex++
    console.log(characterIndex);
  }
  
  // if the character is a not a " " and
  // if the character has already appeared add  to results[i] array --> results[i].push(i)
  // add index to key pair value's array
  return results;
};

letterPositions(myString);

// TEST CODE
//assertArraysEqual(letterPostions("chips").i, [2]);