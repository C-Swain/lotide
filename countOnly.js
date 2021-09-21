


const countOnly = function(allItems, itemsToCount) {
const results = {};

  // we need to go through all the items 1x
  for (const item of allItems) {

// for each item we will check if its the item wer are looking for 
  if (itemsToCount[item]) { 
    results[item] += 1;
    return results;
} else {
// left this code cause i was worried leaving it out might cuase an issue
 
  
  results[item] = 1;

 }

}
  return results;
};

module.exports = countOnly;

