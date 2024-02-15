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

* `assertArraysEqual()`: compares two arrays to determine if they are equal, returns pass/fail assertion message
* `assertEqual()`: compares two primitive values to determine if they are equal, returns pass/fail assertion message
* `assertObjectsEqual`: compares two objects to determine if they are equal, returns pass/fail assertion message
* `countLetters()`: takes in a string and returns an object that tallies the number of times each letter appears
* `countOnly()`: takes in two arrays of strings. the function searches through the first array (allItems) to find elements that match those of the second array (itemsToCount), and returns an object that tallies their occurance in the first array
* `eqArrays()`: compares two arrays to determine if they are equal
* `eqObjects()`: compares two objects to determine if they are equal
* `findKey()`: takes in an object and a callback, and identifies the object's keys based on key values that result from the callback function
* `findKeyByValue()`: takes in an object and a value, and identifies all keys in the object that have a values equal to the input value
* `flatten()`: takes in an array with sub-arrays, and outputs an array without any nested elements/arrays
* `head()`: takes in an array and returns the first element in the array
* `letterPositions()`: takes in a string and returns an objects containing all characters and their indexes (character: index)
* `map()`: takes in an array and a callback. Each element will pass throught he array and a new array is returned reflecting the impacts of the callback function
* `middle()`: takes in an array and returns a new array that only contains the middle elements of the input array
* `tail()`: takes in an array, removes the first element, and returns a new array with the remaining elements of the input array
* `takeUntil()`: takes in an array and a boolean callback and returns a new array with elements from the input array that resulted in true after being passed through the callback
* `without()`: takes in two arrays. The function will loop over the sourceArray, and will return a new array with only elements that aren't found in the itemsToRemove array.