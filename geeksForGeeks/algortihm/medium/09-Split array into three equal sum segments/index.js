let array1 = [1, 3, 4, 0, 4];
let array2 = [2, 3, 4];
let array3 = [1, -1, 1, -1, 1, -1, 1, -1];

function findSplit(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let splittedArrays = [];

  let totalSum = 0;

  let tempSum = 0;

  let counter = 0;

  let splittable = true;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  let avgSum = totalSum / 3;

  for (let j = 0; j < arr.length; j++) {
    tempSum += arr[j];
    counter++;

    if (tempSum === avgSum) {
      splittedArrays.push(counter);
      tempSum = 0;
    }
  }

  if (splittedArrays.length < 2) {
    splittable = false;
  } else if (splittedArrays[1] >= arr.length) {
    splittable = false;
  }

  if (splittable === false) {
    return [-1, -1];
  }

  return [splittedArrays[0]-1, splittedArrays[1]-1];
}

console.log(findSplit(array1));

console.log(findSplit(array2));

console.log(findSplit(array3));
