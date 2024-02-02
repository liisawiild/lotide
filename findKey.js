const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

//TEST CODE
const results = (findKey({"Blue Hill": {stars: 1}, "Akaleri": {stars: 3},
  "noma": {stars: 2}}, x => x.stars === 2));
console.log(results);


let myObject = {"Lisa": {dog: 1}, "Lyla": {dog: 2}};
assertEqual(findKey(myObject, value => value.dog > 1), "Lyla");
assertEqual(findKey(myObject, value => value.dog > 3), undefined);