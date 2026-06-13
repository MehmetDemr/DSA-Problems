let array1 = [7, 10, 1, 3, 6, 9, 2];

let array2 = [7, 6, 4, 3, 1];

let array3 = [1, 3, 6, 9, 11];

function maxProfit(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let profit = 0;

  let tempProfit = 0;

  let n = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    n = arr.length - 1;

    while (n >= 0) {
      if (i < n) {
        tempProfit = arr[i] - arr[n];
        n--;
      } else {
        n--;
        continue;
      }

      if (tempProfit < profit) {
        profit = tempProfit;
      }
    }
  }
  profit = profit * -1;

  return profit;
}

console.log(maxProfit(array1));

console.log(maxProfit(array2));

console.log(maxProfit(array3));
