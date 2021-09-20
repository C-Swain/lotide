
const middle = function(array) {
  //first we need to find out if the length of the array is even or odd

  let center  = array.length / 2;
 
  if (array.length % 2 === 0) {
    let middleOne = center - 1;
    let middleTwo = center;
    let newArray = [array[middleOne],array[middleTwo]];

    return newArray;

    // if the number is even we will need to return the two middle indexs
  } else {

    let middleOne = center - 0.5;
    let newArray = [array[middleOne]];
    return newArray;
  }
};

module.exports = middle;
