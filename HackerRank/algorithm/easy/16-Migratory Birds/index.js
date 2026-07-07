let arr1 = [1, 1, 2, 2, 3];

function migratoryBirds(arr = []) {
  let counts = new Array(6).fill(0);

  for (let bird of arr) {
    counts[bird]++;
  }

  let maxCount = 0;
  let maxBirdId = 0;

  for (let i = 1; i <= 5; i++) {
    if (counts[i] > maxCount) {
      maxCount = counts[i];
      maxBirdId = i;
    }
  }

  return maxBirdId;
}

console.log(migratoryBirds(arr1));
