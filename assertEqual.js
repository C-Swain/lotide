
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`πΈπΈπΈ Assertion Passed: ${actual} ===  ${expected}`);
  } else {
    console.log(`πππ Assertion Failed: ${actual} !== ${expected}`);
  }
};


 module.exports = assertEqual;

