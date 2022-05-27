const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i=0; i<array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true; 
};

const assertArraysEqual = function(actual, expected) {
  return eqArrays(actual, expected) ? console.log(`Assertion Passed ${actual} === ${expected}`) : console.log(`Assertion Failed ${actual} !== ${expected}`)
};

const without = function(source, itemsToRemove) {
  newArray = [];
  for (let word of itemsToRemove) {
    newArray = source.filter(item => item !== word);
    }
  return newArray;
};

//test case
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(without(words, ["lighthouse"]))
assertArraysEqual(words, ["hello", "world", "lighthouse"]);