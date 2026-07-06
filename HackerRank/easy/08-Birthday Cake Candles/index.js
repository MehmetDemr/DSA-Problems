let arr1 = [3, 2, 1, 3];

function birthdayCakeCandles(candles = []) {
  candles.sort((a, b) => b - a);

  let temp = 0;

  let counter = 1;

  console.log(candles);

  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === candles[i + 1]) {
      counter++;
    } else {
      if (counter > temp) {
        temp = counter;
        counter = 1;
      }
    }
  }

  return temp;
}

console.log(birthdayCakeCandles(arr1));
