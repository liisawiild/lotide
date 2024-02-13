
const tail = function(array) {
  let newArray = array.slice(1);
  console.log({array, newArray}); // this returns the original and resulting array
  return newArray;
};

module.exports = tail;