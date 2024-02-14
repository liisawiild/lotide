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