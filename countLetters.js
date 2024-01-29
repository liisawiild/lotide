const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const countLetters = function(word) {
  let letterCount = {};

  for (var letter of word) {
    console.log(letter);
  }
//take a string
// loop through the letters in the string
// count how many of each letter present
  return letterCount;
};

countLetters("Lisa Wild");