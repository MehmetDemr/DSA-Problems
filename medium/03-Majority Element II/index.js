let array1 = [2, 2, 3, 1, 3, 2, 1, 1];

let array2 = [-5, 3, -5];

let array3 = [3, 2, 2, 4, 1, 4];

function majorityElement(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  if (arr.length === 1) {
    return arr[0];
  }

  let counter = 0;

  let tempNumber = 0;

  let numbersArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length / 3 < counter) {
      if (!numbersArray.includes(tempNumber)) {
        numbersArray.push(tempNumber);
      }
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

  return numbersArray.sort();
}

console.log(majorityElement(array1));
console.log(majorityElement(array2));
console.log(majorityElement(array3));
