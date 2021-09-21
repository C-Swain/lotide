

const countLetters = function(str) {
  const results = {};
  // this code gets rid of spaces 
  str = str.replace(' ', '');
// once there are no spaces we go through each letter of string using a for loop
  for (const letter of str) {
    // this part of the code identifies if this is the first time we have seen the letter if so we create an key that stores data about object occuring
    if (!results[letter])
      results[letter] = 1;
    else
    // if the letter has alreadly occured we add the the existing  keys talls
      results[letter]++;
  }

  return results;
};

