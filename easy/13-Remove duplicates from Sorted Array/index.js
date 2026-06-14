let array1 = [2, 2, 2, 2, 2];

let array2 = [1, 2, 2, 3, 4, 4, 4, 5, 5];

function removeDuplicates(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (newArray.includes(arr[i])) {
      continue;
    } else {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

console.log(removeDuplicates(array1));
console.log(removeDuplicates(array2));
