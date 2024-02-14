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

module.exports = letterPositions;



