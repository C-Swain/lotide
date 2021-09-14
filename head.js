
// program that can be used to verify if the answer is expected 
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😸 Assertion Passed: ${actual} ===  ${expected}`); }
  else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};

// program that returns the head if the array 
const head = function(arr) {
  return arr[0];
};



// test question 
assertEqual(head([5,6,7]), 5);
