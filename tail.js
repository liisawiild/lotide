const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};




const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


const result = tail(["a", "b", "c"]);
assertEqual(result.length, 2);
assertEqual(result[0], "b");