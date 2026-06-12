// let array1 = [1, 2, 3, 4, 5, 6];

// d1 = 2;

// let array2 = [1, 2, 3];

// d2 = 4;

// function rotateAnArray(array = [], d) {
//   if (array.length <= 0) {
//     console.log("It must be an array");
//   }

//   let temp;
//   for (let i = 0; i < d; i++) {
//     array.push(array[0]);
//     array.shift();
//   }

//   return array;
// }

let array1 = [1, 2, 3, 4, 5, 6];

d1 = 2;

let array2 = [1, 2, 3];

d2 = 4;

function rotateAnArray(array = [], d) {
  if (array.length <= 0) {
    console.log("It must be an array");
  }

  for (let i = 0; i < d; i++) {
    let first = array[0];
    for (let j = 0; j < array.length - 1; j++) {
      array[j] = array[j + 1];
    }

    array[array.length - 1] = first;
  }

  return array;
}

console.log(rotateAnArray(array1, d1));

console.log(rotateAnArray(array2, d2));
