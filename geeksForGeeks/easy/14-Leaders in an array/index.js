let array1 = [16, 17, 4, 3, 5, 2];

let array2 = [1, 2, 3, 4, 5, 2];

function leaders(arr = []) {
  if (arr.length <= 0) {
    return "It must be an array";
  }

  let n = arr.length - 1;

  let notLeaderNumber = false;

  let leaderNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    notLeaderNumber = false;
    n = arr.length - 1;

    while (n > i) {
      if (arr[i] > arr[n]) {
        notLeaderNumber = false;
        n--;
      } else if (i === arr.length - 1) {
        leaderNumbers.push(arr[i]);
        break;
      } else {
        notLeaderNumber = true;
        break;
      }
    }

    if (notLeaderNumber === false) {
      leaderNumbers.push(arr[i]);
    }
  }

  return leaderNumbers;
}

console.log(leaders(array1));
console.log(leaders(array2));
