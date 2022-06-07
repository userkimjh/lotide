// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  actual = typeof actual === 'string' ? `"${actual}"` : actual;
  expected = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};

const countLetters = function(sentence) {
  const results = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      (!results[letter]) ? results[letter] = 1 : results[letter]++;
    }
  }
  return results;
};

const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
};

const result = countLetters('lighthouse in the house')
assertEqual( result["l"], 1);
assertEqual( result["i"], 2);
assertEqual( result["g"], 1);
assertEqual( result["h"], 4);
assertEqual( result["t"], 2);
assertEqual( result["o"], 2);
assertEqual( result["u"], 2);
assertEqual( result["s"], 2);
assertEqual( result["e"], 3);
assertEqual( result["n"], 1);

module.exports = countLetters;

