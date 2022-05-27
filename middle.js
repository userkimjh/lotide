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


const middle = function(array) {
  if (array.length < 3) {
    return [];
  }

  let middleIndex = Math.floor(array.length/2);

  return array.length % 2 === 0 ? [array[middleIndex -1], array[middleIndex]] : [array[middleIndex]];
};