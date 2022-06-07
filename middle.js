const middle = function(array) {
  if (array.length < 3) {
    return [];
  }

  let middleIndex = Math.floor(array.length/2);

  return array.length % 2 === 0 ? [array[middleIndex -1], array[middleIndex]] : [array[middleIndex]];
};

module.exports = middle;