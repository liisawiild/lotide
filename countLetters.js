/** this function takes in a string and returns an object
 * that tallies the number of times each letter appears in 
 * the string. */

const countLetters = function(word) {
  let letterCount = {};

  for (const character of word) {
    if (character !== " ") {
      if (letterCount[character]) {
        letterCount[character] += 1;
      } else {
        letterCount[character] = 1;
      }
    }
  } return letterCount;
};

module.exports = countLetters;