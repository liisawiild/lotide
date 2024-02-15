/**this function takes in a string and returns an objects
 * containing all characters and their indexes (character: index) */

const letterPositions = function(sentence) {
  const results = {};
  let characterIndex = 0;
  for (let character of sentence) {
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



