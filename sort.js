const sort = function(array) {
  const sortedArray = [];
  for (const item of array) {
    if (sortedArray.length === 0) sortedArray.push(item);
    sortedArray.forEach((value, index) => {
      if (sortedArray.length !== array.length) {
          if (sortedArray.length === index) {
            sortedArray.push(item);
          } else if ( item < sortedArray[index]) {
            sortedArray.splice(index,0,item)
          }
        }
    })
  }
  return sortedArray; 
};

const array = [10, 2, 5, 1, 9];
console.log(sort(array));
