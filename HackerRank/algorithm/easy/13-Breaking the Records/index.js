let scores = [12, 24, 10, 24];

function breakingRecords(scores = []) {
  let highestScore = scores[0];

  let lowestScore = scores[0];

  let highRecordCount = 0;

  let lowRecordCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highRecordCount++;
    } else if (scores[i] === highestScore || scores[i] === lowestScore) {
      continue;
    } else if (scores[i] < lowestScore) {
      lowestScore = scores[i];
      lowRecordCount++;
    }
  }

  return `${lowRecordCount} ${highRecordCount}`;
}

console.log(breakingRecords(scores));
