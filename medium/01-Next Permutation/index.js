let array1 = [2, 4, 1, 7, 5, 0];

let array2 = [3, 2, 1];

let array3 = [1, 3, 5, 4, 2];

function generatePermutations(arr) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let pivot = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      pivot = i;
      break;
    }
  }

  if (pivot === -1) {
    return arr.reverse();
  }

  for (let i = arr.length - 1; i > pivot; i--) {
    if (arr[i] > arr[pivot]) {
      [arr[i], arr[pivot]] = [arr[pivot], arr[i]];
      break;
    }
  }

  let left = pivot + 1;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

console.log(generatePermutations(array1));
console.log(generatePermutations(array2));
console.log(generatePermutations(array3));
