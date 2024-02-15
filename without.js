/**this function takes in two arrays. The function will loop
 * over the sourceArray, and will return a new array with only
 * elements that aren't found in the itemsToRemove array. */

const without = function(sourceArray, itemsToRemove) {
  let arrayItemsRemoved = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (itemsToRemove.includes(sourceArray[i]) === false) {
      arrayItemsRemoved.push(sourceArray[i]);
    }
  } return arrayItemsRemoved;
};

module.exports = without;