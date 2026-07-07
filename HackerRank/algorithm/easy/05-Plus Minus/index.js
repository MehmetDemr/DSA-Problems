let arr1 = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr = []) {
  let zeroCounter = 0;
  let positiveCounter = 0;
  let negativeCounter = 0;
  let n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCounter++;
    } else if (arr[i] < 0) {
      negativeCounter++;
    } else {
      zeroCounter++;
    }
  }

  return `${(positiveCounter / n).toFixed(6)}\n${(negativeCounter / n).toFixed(6)}\n${(zeroCounter / n).toFixed(6)}`;
}

console.log(plusMinus(arr1));
