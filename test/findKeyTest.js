const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

//TEST CODE
const results = (findKey({"Blue Hill": {stars: 1}, "Akaleri": {stars: 3},
  "noma": {stars: 2}}, x => x.stars === 2));
console.log(results);


let myObject = {"Lisa": {dog: 1}, "Lyla": {dog: 2}};
assertEqual(findKey(myObject, value => value.dog > 1), "Lyla");
assertEqual(findKey(myObject, value => value.dog > 3), undefined);