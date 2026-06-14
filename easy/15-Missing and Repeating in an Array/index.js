let array1 = [3, 1, 3];

let array2 = [4, 3, 6, 2, 1, 1];

function findTwoElement(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let counter = 0;

  let twoElement = [];

  for (let i = 0; i < arr.length; i++) {
    counter = 0;
    if (i !== 0 && !arr.includes(i)) {
      twoElement.push(i);
    }

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }

      if (counter > 1 && !twoElement.includes(arr[i])) {
        twoElement.push(arr[i]);
      }
    }
  }

  return twoElement;
}

console.log(findTwoElement(array1));

console.log(findTwoElement(array2));
