let b1 = 60;

let keyboards1 = [40, 50, 60];

let drives1 = [5, 8, 12];

function getMoneySpent(keyboards = [], drives = [], b = 0) {
  let results = [];

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      results.push(keyboards[i] + drives[j]);
    }
  }

  let tempResult = -1;

  for (let i = 0; i < results.length; i++) {
    if (results[i] <= b && results[i] > tempResult) {
      tempResult = results[i];
    }
  }

  return tempResult;
}

console.log(getMoneySpent(keyboards1, drives1, b1));
