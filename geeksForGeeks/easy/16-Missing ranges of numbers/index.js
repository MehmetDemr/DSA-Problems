let array1 = [14, 15, 20, 30, 31, 45];

let lower1 = 10;

let upper1 = 50;

let array2 = [-48, -10, -6, -4, 0, 4, 17];

let lower2 = -54;

let upper2 = 17;

function missingRanges(arr = [], lower, upper) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      if (lower < arr[i]) {
        newArray.push([lower, arr[i] - 1]);
      }
    } else if (i < arr.length) {
      if (Math.abs(arr[i] - arr[i - 1]) > 1) {
        newArray.push([arr[i - 1] + 1, arr[i] - 1]);
      }
    }

    if (i === arr.length - 1) {
      if (arr[i] < upper) {
        newArray.push([arr[i] + 1, upper]);
      }
    }
  }

  return newArray;
}

console.log(missingRanges(array1, lower1, upper1));

console.log(missingRanges(array2, lower2, upper2));
