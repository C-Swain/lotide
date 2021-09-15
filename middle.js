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

const middle = function(array) {
  //first we need to find out if the length of the array is even or odd

let center  = array.length/2;
 
if (array.length % 2 === 0) {
   var middleOne = center - 1;
   var middleTwo = center;
   var newArray = [array[middleOne],array[middleTwo]];

  console.log(newArray);

// if the number is even we will need to return the two middle indexs
}
else { 

  var middleOne = center - 0.5;
  newArray = [array[middleOne]];
  console.log(newArray);
 
}
}

middle([1, 2, 7, 5, 9])
