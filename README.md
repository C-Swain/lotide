# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @catherineswain/lotide`

**Require it:**

`const _ = require('@catherineswain/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertArraysEqual: Function checks if both arrays are equal and displays as "Assertion Passed" or "Assertion Failed.

assertEqual: funtion that checks is primitive data is  strictly equal, and displays as "Assertion Passed" or "Assertion Failed. 

assertObjectsEqual:assertObjectsEqual: function will check if the two objects are equal to each other.  Answer will console log as "Assertion Passed" or "Assertion Failed.

countLetters: this function takes a string and produces an array counting the number of times each letter occurs .

eqObjects: function compares to objects to see if they are identical. Answer will console log as "Assertion Passed" or "Assertion Failed.

eqArrays: function compares to arrays to see if they are identical. Answer will console log as "Assertion Passed" or "Assertion Failed.

findKey: function is to search through an objest using a callback to return the value of the first key. 

findKeyByValue:  function is able to search through an object to find the desired key and will return undefined if no key found

head: function returns the first item in an array.

letterPositions: this function allows you to search for the locaton of a specific letter in a string.

map: function takes in an array and a callback to create a new array based on the task completed by the callback.

middle: function provides the middle of an array. if the array is an even number length  it will return the teo numbers in the middle , if odd only one number will be returned.

tail:  function removes the head from the array , returning the rest of the array. 

takeUntil: function requires an array and a callback. this function removes items from an array until it reaches the callback and then returns the remaining items.

without: function takes in two arrays as arguments. The first array contains the elements we have and the second array contains the elements we want to remove. the function removes the items in array two from array one and returns the answer.

