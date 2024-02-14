const assertObjectsEqual = require('../assertObjectsEqual');

//TEST CODE
assertObjectsEqual({a: 1, b: 2}, {a: 1, b: 2});
assertObjectsEqual({a: 1, b: 3}, {a: 1, b: 2});
assertObjectsEqual({a: 1, b: 3, c: 4}, {a: 1, b: 2});
assertObjectsEqual({}, {a: 1, b: 2});

