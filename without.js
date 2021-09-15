
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

const without = function(source, unwanted) {
  let newArr = source;
  for (let i = 0; i < newArr.length; i++) {
    for (let x = 0; x < unwanted.length; x++) {
      if (source[i] !== unwanted[x]) {
        newArr.splice(i, 1)
      }
    }
  }
  return newArr;
};

console.log(without([1, 2, 3], [3]));
