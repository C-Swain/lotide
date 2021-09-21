
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


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

module.exports = eqObjects;
