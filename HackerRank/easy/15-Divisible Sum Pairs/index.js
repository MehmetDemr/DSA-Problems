let arr1 = [1 ,3, 2, 6, 1, 2];

let k1 = 3;

function divisibleSumPairs(k = 0, arr = []) {
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        continue;
      }

      if (arr[i] < arr[j] && (arr[i] + arr[j]) % k===0) {
        counter++;
      }
    }
  }

  return counter;
}

console.log(divisibleSumPairs(k1, arr1));
