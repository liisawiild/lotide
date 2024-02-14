const without = function(sourceArray, itemsToRemove) {
  let arrayItemsRemoved = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (itemsToRemove.includes(sourceArray[i]) === false) {
      arrayItemsRemoved.push(sourceArray[i]);
    }
  } return arrayItemsRemoved;
};

module.exports = without;