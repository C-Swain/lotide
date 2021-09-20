const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');



const result = middle([1, 2, 7, 5, 9]);

assertArraysEqual(result,[7]);

