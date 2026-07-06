function getTotalX(firstArray = [], secondArray = []) {
  // İki sayının en büyük ortak bölenini (GCD) bulan yardımcı fonksiyon
  function findGreatestCommonDivisor(firstNumber, secondNumber) {
    while (secondNumber) {
      const remainder = firstNumber % secondNumber;
      firstNumber = secondNumber;
      secondNumber = remainder;
    }
    return firstNumber;
  }

  // İki sayının en küçük ortak katını (LCM) bulan yardımcı fonksiyon
  function findLeastCommonMultiple(firstNumber, secondNumber) {
    const commonDivisor = findGreatestCommonDivisor(firstNumber, secondNumber);
    return (firstNumber * secondNumber) / commonDivisor;
  }

  // Adım 1: birinci dizideki tüm sayıların ortak katını (LCM) bul
  // Bu sayı, "hangi adaylar birinci dizinin tüm elemanlarına bölünebilir" sorusuna cevap verir
  let smallestNumberDivisibleByAllOfFirstArray = 1;

  for (let i = 0; i < firstArray.length; i++) {
    smallestNumberDivisibleByAllOfFirstArray = findLeastCommonMultiple(
      smallestNumberDivisibleByAllOfFirstArray,
      firstArray[i],
    );
  }

  // Adım 2: ikinci dizideki tüm sayıların ortak bölenini (GCD) bul
  // Bu sayı, "hangi adaylar ikinci dizinin tüm elemanlarını bölebilir" sorusuna cevap verir
  let largestNumberThatDividesAllOfSecondArray = secondArray[0];

  for (let i = 1; i < secondArray.length; i++) {
    largestNumberThatDividesAllOfSecondArray = findGreatestCommonDivisor(
      largestNumberThatDividesAllOfSecondArray,
      secondArray[i],
    );
  }

  // Adım 3: birinci dizinin ortak katının katlarını tara,
  // bunlardan hangileri ikinci dizinin ortak bölenine tam bölünüyor say
  let validNumberCount = 0;

  for (
    let candidate = smallestNumberDivisibleByAllOfFirstArray;
    candidate <= largestNumberThatDividesAllOfSecondArray;
    candidate += smallestNumberDivisibleByAllOfFirstArray
  ) {
    if (largestNumberThatDividesAllOfSecondArray % candidate === 0) {
      validNumberCount++;
    }
  }

  return validNumberCount;
}

let firstArray = [2, 4];
let secondArray = [16, 32, 96];

console.log(getTotalX(firstArray, secondArray)); // 3
