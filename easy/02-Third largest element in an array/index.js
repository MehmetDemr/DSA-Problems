let array1 = [2, 4, 1, 3, 5];

let array2 = [10, 2];

let array3 = [5, 5, 5];

function thirdLargest(array = []) {
  if (array.length < 3) {
    return -1;
  }

  let sortedArray = array.sort();

  return sortedArray[2];
}

console.log(thirdLargest(array1));

console.log(thirdLargest(array2));

console.log(thirdLargest(array3));
