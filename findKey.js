const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKey = function(object, callback) {
//scan object
for (let key in object) {
  
}
//return first key for which the callback returns truthy
//if no key is found return undefined
};