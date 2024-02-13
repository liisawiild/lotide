const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  for (const key in obj) { 
    if ((obj)[key] === value) { 
      return key;
    }
  } return undefined; 
};



// TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  comedy: "The Office", // this will overwrite the one above, and therefore will never print "Brooklyn Nine-Nine"
  reality: "Love on the Spectrum"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Love on the Spectrum"), "reality");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Love Island"), undefined);
