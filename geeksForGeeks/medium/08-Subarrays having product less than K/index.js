let array1 = [1, 2, 3, 4];
k1 = 10;
let array2 = [1, 9, 2, 8, 6, 4, 3];
k2 = 100;
let array3 = [10, 5, 2, 6];
k3 = 100;

function countSubarray(arr = [], k) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let product = 1;

    for (let j = i; j < arr.length; j++) {
      product *= arr[j];

      if (product < k) {
        count++;
      } else {
        break;
      }
    }
  }

  return count;
}

console.log(countSubarray(array1, k1));
console.log(countSubarray(array2, k2));
console.log(countSubarray(array3, k3));
