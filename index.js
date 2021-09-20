const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const countLetter = require('./countLetter');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const eqArrays = require('./eqArrays');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const head   = require('./head');
const map = require('./map');
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
assertArraysEqual: assertArraysEqual,
assertEqual: assertEqual,
assertObjectsEqual: assertObjectsEqual,
countLetter: countLetter,
eqObjects: eqObjects,
eqArrays: eqArrays,
findKey: findKey,
findKeyByValue: findKeyByValue,
head:   head,
letterPositions: letterPositions,
map: map,
middle: middle,
tail:   tail,
takeUntil: takeUntil,
without: without,
};



const indexMaker = function(name) {
	console.log(`const ${name} = require('./${name}');`)
};

indexMaker("without");


