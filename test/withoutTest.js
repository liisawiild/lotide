const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

//TEST CODE
let testArray = [1, 2, 1, 2, 3, 4, 5, 3, 1, 2];
let testRemove = [2, 3];

console.log(without(testArray, testRemove));
assertArraysEqual(without([24, 3, 16, 24, 56], [24]), [3, 16, 56]);
assertArraysEqual(testArray, [1, 2, 1, 2, 3, 4, 5, 3, 1, 2]);
