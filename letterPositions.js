const letterPositions = function(sentence) {
  const results = {};
  for (let i=0; i < sentence.length; i++ ) {
    let letter = sentence[i];
    if (letter !== ' ') {
      results[letter] ? results[letter].push(i) : results[letter] = [i];
    }
  }
  return results;
};

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

const result = letterPositions("lighthouse in the house");

assertArraysEqual(result["l"], [0]);
assertArraysEqual(result["i"], [1, 11]);
assertArraysEqual(result["g"], [2]);
assertArraysEqual(result["h"], [3,5,15,18]);
assertArraysEqual(result["t"], [4,14]);
assertArraysEqual(result["o"], [6,19]);
assertArraysEqual(result["u"], [7,20]);
assertArraysEqual(result["s"], [8,21]);
assertArraysEqual(result["e"], [9, 16, 22]);
assertArraysEqual(result["n"], [12]);

