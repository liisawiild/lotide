const eqArrays = function(arr1, arr2) {
  //loop through arr1
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 ${arr1} !== ${arr2}`);
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`🛑🛑🛑 ${arr1} !== ${arr2}`);
      }
    } console.log(`✅✅✅ ${arr1} === ${arr2}`);
  }
};

console.log(eqArrays([1,2,3], [1,2,3]));