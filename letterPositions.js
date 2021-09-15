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


const letterPositions = function(sentence) {
// a place to store  results 
  const results = {};
// this piece of code is to remove spaces 
  sentence = sentence.replace(' ', '');

  // Using a for loop to go through every letter in the sentence 
  for(let i = 0; i < sentence.length; i++)

  if (!results[sentence[i]])
  results[sentence[i]] = [i];
else
  results[sentence[i]].push(i);

  // logic to update results here
  return results;
};



testResult = letterPositions("hello");
assertArraysEqual(testResult["h"], [0]);
assertArraysEqual(testResult["e"], [1]);
assertArraysEqual(testResult["l"], [2, 3]);
assertArraysEqual(testResult["o"], [4]);
