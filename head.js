/* in this code we are running an array through a function to return the 
   first value, and testing that the results you expect are what is produced 
   by running it through the assertEqual function */

const head = function(array) {
  return array[0];
};

module.exports = head;
