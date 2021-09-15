


const eqArrays = function (actual, expected){
  let match = true
  for(let i =0; i < actual.length; i ++){
  if (actual[i] !== expected[i]) {
    match = false   
  }  
} return match
};


const assertArrayEqual = function(actual, expected) {
  let equivalentArrays = eqArrays(actual, expected);
  if (equivalentArrays === true) {
    console.log(`😸Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
  }
}; 

assertArrayEqual([1,1], [1,2]);