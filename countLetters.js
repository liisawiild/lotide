const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let myString = "LISA WILD";

const countLetters = function(word) {
  let letterCount = {};

  for (const character of word) {
    if (character != " ") {
      if (letterCount[character]) {
        letterCount[character] += 1;
      } else if (character != " ") {
        letterCount[character] = 1;
      }
    }
  } return letterCount;
};


let result = countLetters(myString);
console.log(result);

assertEqual(result["L"], 2);
assertEqual(result["I"], 2);
assertEqual(result["E"], undefined);
assertEqual(result[" "], undefined);