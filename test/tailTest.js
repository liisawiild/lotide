const assertEqual = require('../assertEqual');
const tail = require('../tail');

//TEST CODE
let abcArray = ["a", "b", "c"];
let emptyArray = [];
let oneArray = [2];

const result = tail(abcArray);
assertEqual(abcArray.length, 3);
assertEqual(result.length, 2);
assertEqual(result[0], "b");

const emptyResult = tail(emptyArray);
assertEqual(emptyArray.length, 0);
assertEqual(emptyResult.length, 0);
assertEqual(emptyResult[0], undefined);

const oneResult = tail(oneArray);
assertEqual(oneArray.length, 1);
assertEqual(oneResult.length, 0);
assertEqual(oneResult[0], undefined);