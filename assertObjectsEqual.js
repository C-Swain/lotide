const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😸 Assertion Passed: ${actual} ===  ${expected}`); }
  else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};

const eqArrays = function (actual, expected){
  let match = true
  for(let i =0; i < actual.length; i ++){
  if (actual[i] !== expected[i]) {
    match = false   
  }  
} 
return match

}

const eqObjects = function(object1, object2) {
  //pull the keys value from the objects so they can be compared 
  let KeysOb1 = Object.keys(object1);
  let KeysOb2 = Object.keys(object2);

  // we check the key lengths first as its the quickest way to determine if they dont match
  if (KeysOb1.length !== KeysOb2.length) {

    //if length does not match return as false 
    return false;
  }

  // We will use a for loop to check each key to see if there is a matching key in Object 2 
  for (let key of KeysOb1) {
    
    // We confirm that these are arrays and proceed to compare keys in object one and two 
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
     
      // if arrays aren't equal object is not equal as object is type of array
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      // one last check if the object are arrays.
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      eqObjects(object1[key], object2[key]);
    } 
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  // if not false it must be true 
  return true;
};

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
  

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false

