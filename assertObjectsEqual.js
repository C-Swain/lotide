const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
 // loading the inspect tool to get JS to draw the information from the array
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {

   // using inspect on the input in order to view the arrays that are being compared 
    console.log(` 😸 Assertion Passed:  ${inspect(actual)} === ${inspect(actual)}`)
  } else {
    console.log(` 🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(actual)}`)
  }
};
  
 module.exports = assertObjectsEqual;
