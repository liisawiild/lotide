const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');


//TEST CODE
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map((["as", "soon", "as", "possible"]), word => word[0]), ["a", "s", "a", "p"]);
assertArraysEqual(map((["ready", "set", "go"]), word => word[0]), ["r", "s", "g"]);
assertArraysEqual(map((["we", " ", "they"]), word => word[0]), [ "w", " ", "t"]);

