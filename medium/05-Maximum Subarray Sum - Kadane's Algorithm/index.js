let array1 = [2, 3, -8, 7, -1, 2, 3];

let array2 = [-2, -4];

let array3 = [5, 4, 1, 7, 8];

function maxSubarraySum(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let sum = 0;

  let positiveCounter = 0;

  let negativeArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      positiveCounter++;
      sum += arr[i];
    } else if (positiveCounter === 0 && arr[i] < 0) {
      negativeArray.push(arr[i]);
    }
  }

  if (positiveCounter > 0) {
    return sum;
  } else {
    negativeArray.sort((a, b) => a - b);

    return negativeArray[negativeArray.length - 1];
  }
}

console.log(maxSubarraySum(array1));

console.log(maxSubarraySum(array2));

console.log(maxSubarraySum(array3));
