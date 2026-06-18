let array1 = [1, 5, 8, 10];

let k1 = 2;

let array2 = [3, 9, 12, 16, 20];

let k2 = 3;

function getMinDiff(arr = [], k) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  arr.sort((a, b) => a - b);
  let minNumber = arr[0];

  let maxNumber = arr[arr.length - 1];

  return maxNumber - k - (minNumber + k);
}

console.log(getMinDiff(array1, k1));

console.log(getMinDiff(array2, k2));
