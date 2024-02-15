const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');


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
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Office"), "comedy");
