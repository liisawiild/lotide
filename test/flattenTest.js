const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

//TEST CODE
const myArray = [1, 2, [3, 4], 5, [6, 7], 6];
console.log(flatten(myArray));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, 7], 6]), [1, 2, 3, 4, 5, 6, 7, 6])