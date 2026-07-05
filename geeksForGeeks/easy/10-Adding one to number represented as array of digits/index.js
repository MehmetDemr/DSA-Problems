let array1 = [1, 2, 4];

let array2 = [9, 9, 9];

function addOne(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let arrayToString = "";

  let realNumber = 0;

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    arrayToString += arr[i];
  }

  realNumber = Number(arrayToString);

  realNumber++;

  return realNumber;
}

console.log(addOne(array1));
console.log(addOne(array2));
