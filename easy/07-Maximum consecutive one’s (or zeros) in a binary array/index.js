let array1 = [0, 1, 0, 1, 1, 1, 1];

let array2 = [0, 0, 1, 0, 1, 0];

let array3 = [0, 0, 0, 0];

function maxConsecutive(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let counter = 1;

  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      counter++;
    } else {
      temp = counter;
    }
  }

  return temp;
}

console.log(maxConsecutive(array1));
console.log(maxConsecutive(array2));
console.log(maxConsecutive(array3));
