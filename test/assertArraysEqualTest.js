const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
assertArraysEqual([3,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,3, 4]);
assertArraysEqual([], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,3]);