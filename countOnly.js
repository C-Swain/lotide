
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😸 Assertion Passed: ${actual} ===  ${expected}`); }
  else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};



const countOnly = function(allItems, itemsToCount) {
const results = {};

  // we need to go through all the items 1x
  for (const item of allItems) {

// for each item we will check if its the item wer are looking for 
  if (itemsToCount[item]) { 
    results[item] += 1;
} else {
// left this code cause i was worried leaving it out might cuase an issue
 
  
  results[item] = 1;

 }

}
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": false, "Karima": false, "Fang": false, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], 1);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], 1);