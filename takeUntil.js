
const eqArrays = function (actual, expected){
  let match = true
  for(let i =0; i < actual.length; i ++){
  if (actual[i] !== expected[i]) {
    match = false   
  }  
} return match
};


const assertArraysEqual = function(actual, expected) {
  let equivalentArrays = eqArrays(actual, expected);
  if (equivalentArrays === true) {
    console.log(`😸Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
}; 



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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[1, 2, 5, 7, 2]);

assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);