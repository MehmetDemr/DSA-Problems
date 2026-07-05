let firstAliceArray = [5, 6, 7];

let secondAliceArray = [17, 28, 30];

let firstBobArray = [3, 6, 10];

let secondBobArray = [99, 16, 8];

function compareTriplets(array1 = [], array2 = []) {
  let pointBob = 0;

  let pointAlice = 0;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > array2[i]) {
      pointAlice++;
    } else if (array2[i] > array1[i]) {
      pointBob++;
    } else {
      continue;
    }
  }

  return `${pointAlice} ${pointBob}`;
}

console.log(compareTriplets(firstAliceArray, firstBobArray));

console.log(compareTriplets(secondAliceArray, secondBobArray));
