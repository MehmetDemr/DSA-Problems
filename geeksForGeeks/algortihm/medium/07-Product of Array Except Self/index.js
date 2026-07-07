let array1 = [10, 3, 5, 6, 2];
let array2 = [12, 0];

function productExceptSelf(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let mul = 1;

  let results = [];

  for (let i = 0; i < arr.length; i++) {
    mul = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        mul = mul * arr[j];
      }
    }
    results.push(mul);
  }

  return results;
}

console.log(productExceptSelf(array1));

console.log(productExceptSelf(array2));
