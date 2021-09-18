const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`😸 Assertion Passed: ${actual} ===  ${expected}`); }
  else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected} `);
  }
};


const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) 
		return key;
  }
};

const result  = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);


assertEqual(result, "noma");

const result2  = findKey({
  "Los Cabos": { stars: 4 },
  "Vallerta":  { stars: 5 },
  "Veracruz":  { stars: 2 },
  "Cancun":    { stars: 3 },
  "Cd Carmen": { stars: 2 },
  "Acapulco":  { stars: 3 }
}, x => x.stars === 5);

assertEqual(result2, "Vallerta");