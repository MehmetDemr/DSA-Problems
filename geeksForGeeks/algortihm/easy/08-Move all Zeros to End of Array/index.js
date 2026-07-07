let array1 = [1, 2, 0, 4, 3, 0, 5, 0];

let array2 = [10, 20, 30];

let array3 = [0, 0];

let array4 = [];

function pushZerosToEnd(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let tempArr = [];

  let zeroCounter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      tempArr.push(arr[i]);
    } else {
      zeroCounter++;
      continue;
    }
  }

  while (zeroCounter > 0) {
    tempArr.push(0);
    zeroCounter--;
  }

  return tempArr;
}

console.log(pushZerosToEnd(array1));
console.log(pushZerosToEnd(array2));
console.log(pushZerosToEnd(array3));
