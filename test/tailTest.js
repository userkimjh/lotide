const tail = require('../tail');
const assert = require('chai').assert;

describe ('#tail', function () {
  it ('should always fail', function() {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.notEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
  })

  it ('should return the original array', function () {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.equal(words.length, 3); // original array should still have 3 elements!
  })
});