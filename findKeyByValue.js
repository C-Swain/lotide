
// to find the key we need to know both the object and the value
const findKeyByValue = function(obj, value) {

  // in order to find out which key we will need a list(array) of all the keys
  let objKeys = Object.keys(obj);

//we then use a for loop to check each key to see which matches the value
  for (let LuckyKey of objKeys) {

    //this is where we check the individual key and value for a match

    if(obj[LuckyKey] === value) {
      return LuckyKey
    }
  }
//if there is no match it will return as undefined 
  return undefined;
}


module.exports = findKeyByValue;