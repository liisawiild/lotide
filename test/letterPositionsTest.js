const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

// TEST CODE
assertArraysEqual(letterPositions("chips").i, [2]);
assertArraysEqual(letterPositions("audrey wild").d, [2, 10]);
assertArraysEqual(letterPositions("fuzzy wuzzy").z, [2, 3, 8, 9]);

