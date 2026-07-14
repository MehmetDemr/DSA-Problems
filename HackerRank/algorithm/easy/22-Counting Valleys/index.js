let str1 = "UDDDUDUU";

function countingValleys(path = "") {
  let counter = 0;
  let numberOfValleys = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      counter++;

      if (counter === 0) {
        numberOfValleys++;
      }
    } else if (path[i] === "D") {
      counter--;
    }
  }

  return numberOfValleys;
}

console.log(countingValleys(str1));
