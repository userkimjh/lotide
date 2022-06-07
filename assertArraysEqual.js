const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual, expected) ? console.log(`Assertion Passed ${actual} === ${expected}`) : console.log(`Assertion Failed ${actual} !== ${expected}`)
};

module.exports = assertArraysEqual;