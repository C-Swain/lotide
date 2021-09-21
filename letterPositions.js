
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



module.exports = letterPositions;