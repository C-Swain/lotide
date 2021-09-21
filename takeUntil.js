


const takeUntil = function(array, callback) {
 
  // a place to store the results
  const results = [];
// a for loop to go through the array once
  for (const elm of array) {
    
    // returning a callback that evaluates to true 
      if (callback(elm) === true) {
      return results;
      }
    // this makes sure the wanted data does to the results array 
      results.push(elm);
  }
  return results;
};

module.exports = takeUntil;