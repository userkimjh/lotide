const assert = require('chai').assert;
const middle = require('../middle');

describe ("#middle", function() {
  it('should return the middle item from an odd length array', function() {
    const array = [1,2,3,4,5];
    assert.equal(middle(array), 3);
  })
  
  it('should return an array of two items from an even length array', function() {
    const array = [1,2,3,4];
    assert.deepEqual(middle(array), [2,3]);
  })
})