const assertEqual = function(actual, expected) {
  actual = typeof actual === 'string' ? `"${actual}"` : actual;
  expected = typeof expected === 'string' ? `"${expected}"` : expected;
  if (actual === expected) {
    console.log(`Assertion Passed ${actual} === ${expected}`)
  } else {
    console.log(`Assertion Failed ${actual} !== ${expected}`)
  }
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true;
};

//Test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false