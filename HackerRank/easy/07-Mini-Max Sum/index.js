let arr1 = [1, 2, 3, 4, 5];

function miniMaxSum(arr = []) {
  let resultArray = [];

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = 0;

    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      } else {
        result += arr[j];
      }
    }

    resultArray.push(result);
  }

  resultArray.sort((a, b) => a - b);

  return `${resultArray[0]} ${resultArray[resultArray.length - 1]}`;
}

console.log(miniMaxSum(arr1));
