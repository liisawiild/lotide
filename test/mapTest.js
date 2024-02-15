const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map((["as", "soon", "as", "possible"]), word => word[0]), ["a", "s", "a", "p"]);
assertArraysEqual(map((["ready", "set", "go"]), word => word[0]), ["r", "s", "g"]);
assertArraysEqual(map((["we", " ", "they"]), word => word[0]), [ "w", " ", "t"]);

const numbersArr = [1, 2, 3, 4, 5];
const results2 = map(numbersArr, number => number * 2);
console.log(results2);

assertArraysEqual(map(([1, 2, 3, 4, 5]), number => number * 3), [3, 6, 9, 12, 15]);
assertArraysEqual(map(([1, 2, 3, 4, 5]), number => number + 1), [2, 3, 4, 5, 6]);
assertArraysEqual(map(([1, 2, 3, 4, 5]), number => number * 10), [10, 20, 30, 40, 50]);
