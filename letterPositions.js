/**this function loops through a sentence and each new 
 * character is added as a key-pair value (character: index) */

const letterPositions = function(sentence) {
  const results = {};
  let characterIndex = 0;
  // loop through the sentence
  for (let character of sentence) {
  // if the character is a not a " " 
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

module.exports = letterPositions;



