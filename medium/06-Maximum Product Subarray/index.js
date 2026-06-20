let array1 = [-2, 6, -3, -10, 0, 2];
let array2 = [-1, -3, -10, 0, 6];
let array3 = [2, 3, 4];

function maxProduct(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let negativeNumbers = [];

  let negativeCounter = 0;

  let mul = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      mul = arr[i] * mul;
    } else if (arr[i] === 0) {
      continue;
    } else {
      negativeNumbers.push(arr[i]);
      negativeCounter++;
    }
  }

  negativeNumbers.sort((a, b) => a - b);

  console.log(negativeNumbers);

  if (negativeCounter % 2 == 0 && negativeNumbers.length > 0) {
    for (let i = 0; i < negativeNumbers.length; i++) {
      mul = negativeNumbers[i] * mul;
    }
  } else if (negativeCounter % 2 != 0 && negativeNumbers.length > 0) {
    negativeNumbers.pop();
    for (let i = 0; i < negativeNumbers.length; i++) {
      mul = negativeNumbers[i] * mul;
    }
  }

  return mul;
}

console.log(maxProduct(array1));
console.log(maxProduct(array2));
console.log(maxProduct(array3));
