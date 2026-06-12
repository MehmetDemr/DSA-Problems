let array1 = [1, 2, 3, 4, 5, 6, 7, 8];

let k1 = 3;

let array2 = [1, 2, 3, 4, 5];

let k2 = 3;

let array3 = [5, 6, 8, 9];

let k3 = 5;

function reverseAnArrayInGroups(array = [], k) {
  if (array.length <= 0) {
    console.log("It must be an array");
  }

  if (array.length < k) {
    let reversedArray = [];

    for (let j = 0; j < array.length; j++) {
      reversedArray[j] = array[array.length - 1 - j];
    }

    return reversedArray;
  }

  for (let i = 0; i < array.length; i += k) {
    let left = i;
    let right = Math.min(i + k - 1, array.length - 1);

    while (left < right) {
      let temp = array[left];

      array[left] = array[right];
      array[right] = temp;

      left++;
      right--;
    }
  }

  return array;
}

console.log(reverseAnArrayInGroups(array1, k1));

console.log(reverseAnArrayInGroups(array2, k2));

console.log(reverseAnArrayInGroups(array3, k3));
