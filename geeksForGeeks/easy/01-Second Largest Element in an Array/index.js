let array1 = [12, 35, 1, 10, 34];

let array2 = [10, 5, 10];

let array3 = [10, 10, 10];

function secondLargest(array = []) {
  if (array.length <= 0) {
    return "It must be an array";
  }

  let secondLargestNumber = 0;

  for (let i = 0; i + 1 < array.length; i++) {
    if (array[i] > array[i + 1]) {
      secondLargestNumber = array[i + 1];
    } else if (array[i] < array[i + 1]) {
      secondLargestNumber = array[i];
    } else if (array[i] == array[i + 1]) {
      secondLargestNumber = -1;
    }
  }

  return secondLargestNumber;
}

console.warn(secondLargest(array1));

console.warn(secondLargest(array2));

console.warn(secondLargest(array3));
