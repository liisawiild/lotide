# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @liisawiild/lotide`

**Require it:**

`const _ = require('@liisawiild/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: compares two arrays to determine if they are equal, returns pass/fail assertion message
* `assertEqual(value1, value2)`: compares two primitive values to determine if they are equal, returns pass/fail assertion message
* `assertObjectsEqual(obj1, obj2)`: compares two objects to determine if they are equal, returns pass/fail assertion message
* `countLetters(string)`: takes in a string and returns an object that tallies the number of times each letter appears
* `countOnly(array1, array2)`: takes in two arrays of strings. the function searches through the first array (allItems) to find elements that match those of the second array (itemsToCount), and returns an object that tallies their occurance in the first array
* `eqArrays(array1, array2)`: compares two arrays to determine if they are equal
* `eqObjects(obj1, obj2)`: compares two objects to determine if they are equal
* `findKey(obj, callback)`: takes in an object and a callback, and identifies the object's keys based on key values that result from the callback function
* `findKeyByValue(obj, value)`: takes in an object and a value, and identifies all keys in the object that have a values equal to the input value
* `flatten(array)`: takes in an array with sub-arrays, and outputs an array without any nested elements/arrays
* `head(array)`: takes in an array and returns the first element in the array
* `letterPositions(string)`: takes in a string and returns an objects containing all characters and their indexes (character: index)
* `map(array, callback)`: takes in an array and a callback. Each element will pass throught he array and a new array is returned reflecting the impacts of the callback function
* `middle(array)`: takes in an array and returns a new array that only contains the middle elements of the input array
* `tail(array)`: takes in an array, removes the first element, and returns a new array with the remaining elements of the input array
* `takeUntil(array, callback)`: takes in an array and a boolean callback and returns a new array with elements from the input array that resulted in true after being passed through the callback
* `without(array1, array2)`: takes in two arrays. The function will loop over the sourceArray, and will return a new array with only elements that aren't found in the itemsToRemove array.