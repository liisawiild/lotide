const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

//TEST CODE
let myString = "LISA WILD";
let result = countLetters(myString);
console.log(result);

assertEqual(result["L"], 2);
assertEqual(result["I"], 2);
assertEqual(result["E"], undefined);
assertEqual(result[" "], undefined);