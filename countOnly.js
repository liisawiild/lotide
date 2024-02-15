/**this function takes in two arrays of strings
 * the first array (allItems) is the main array the function is looking through,
 * and the second array (itemsToCount) contains the values that the function is looking for.
 * It will return an object that tallies the values in the second array that it found in the first array. 
 */

const countOnly = function(allItems, itemsToCount) {
  const results = {};
   
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;