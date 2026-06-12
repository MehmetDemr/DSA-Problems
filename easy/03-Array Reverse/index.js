// let array1 = [1, 4, 3, 2, 6, 5];

// let array2 = [4, 5, 1, 2];

// function arrayReverse(array = []) {
//   if (array.length <= 0) {
//     console.log("It must be an array");
//   }

//   let sortedArray = array.reverse();

//   return sortedArray;
// }

let array1 = [1, 4, 3, 2, 6, 5];

let array2 = [4, 5, 1, 2];

function arrayReverse(array = []) {
  if (array.length <= 0) {
    console.log("It must be an array");
  }

  let sortedArray = [];

  for (let i = 0; i < array.length; i++) {
    sortedArray[i] = array[array.length - i - 1];
  }

  return sortedArray;
}

console.log(arrayReverse(array1));

console.log(arrayReverse(array2));
