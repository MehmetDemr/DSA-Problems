let array1 = [1, 4, 5, 3, 2];

let array2 = [1, 2, 3, 4];

function subarraySum(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i] * (i + 1) * (arr.length - i);
  }

  return total;
}

console.log(subarraySum(array1));
console.log(subarraySum(array2));
