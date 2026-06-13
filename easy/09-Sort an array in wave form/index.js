let array1 = [1, 2, 3, 4, 5];

let array2 = [2, 4, 7, 8, 9, 10];

let array3 = [];

function sortInWave(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let temp;

  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1] && counter != 1) {
      temp = arr[i + 1];

      arr[i + 1] = arr[i];

      arr[i] = temp;

      counter++;
    } else {
      counter = 0;
      continue;
    }
  }

  return arr;
}

console.log(sortInWave(array1));

console.log(sortInWave(array2));
