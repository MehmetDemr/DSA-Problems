let array1 = [1, 1, 2, 1, 3, 5, 1];

let array2 = [7];

let array3 = [2, 13];

function majorityElement(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let counter = 0;

  let temp = 0;

  let tempNumber = 0;

  let number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (temp < counter) {
      temp = counter;
      number = tempNumber;
    }

    counter = 0;
    tempNumber = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
        tempNumber = arr[i];
      }
    }
  }

  if (temp <= arr.length / 2) {
    return -1;
  }

  return number;
}

console.log(majorityElement(array1));
console.log(majorityElement(array2));
console.log(majorityElement(array3));
