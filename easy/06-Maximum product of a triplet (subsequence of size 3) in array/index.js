let array1 = [10, 3, 5, 6, 20];

let array2 = [-10, -3, -5, -6, -20];

let array3 = [1, -4, 3, -6, 7, 0];

function maximumProduct(array = []) {
  if (array.length <= 0) {
    return "It must be an array";
  }

  let sortedArray = [];

  let maxProduct = 0;

  sortedArray = array.sort((a, b) => a - b);

  maxProduct = Math.max(
    array[0] * array[1] * array[array.length - 1],
    array[array.length - 1] * array[array.length - 2] * array[array.length - 3],
  );

  return maxProduct;
}

console.log(maximumProduct(array1));

console.log(maximumProduct(array2));

console.log(maximumProduct(array3));
