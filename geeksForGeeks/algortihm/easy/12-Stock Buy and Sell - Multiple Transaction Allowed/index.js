let array1 = [100, 180, 260, 310, 40, 535, 695];

let array2 = [4, 2];

function maxProfit(arr) {
  let profit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      profit += arr[i] - arr[i - 1];
    }
  }

  return profit;
}

console.log(maxProfit(array1));

console.log(maxProfit(array2));
