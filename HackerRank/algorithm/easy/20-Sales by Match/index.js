let arr1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];

function sockMerchant(arr = []) {
  let countedArray = [];

  let counter = 0;

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    counter = 0;
    if (!countedArray.includes(arr[i])) {
      countedArray.push(arr[i]);
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          counter++;
        }
      }

      result += Math.floor(counter / 2);
    } else {
      continue;
    }
  }

  return result;
}

console.log(sockMerchant(arr1));
