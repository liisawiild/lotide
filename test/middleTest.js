const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//TEST CODE
let myArray = [1, 2, 3, 4, 5, 8, 9, 7, 5, 6 ,1]
console.log(middle(myArray));

let array2 = [1, 2, 3, 4];
let expectedArray = [2, 3];
console.log(middle(array2)); 

assertArraysEqual(middle(array2), expectedArray);