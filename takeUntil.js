const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if(!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results
}

const takeUntil2 = function(array, callback) {
  const endIndex = array.findIndex(item => callback(item))
  return array.slice(0,endIndex)
}

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results1 = takeUntil2(data1, x => x < 0);
const results2 = takeUntil2(data2, x => x === ',');

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

module.exports = takeUntil;
