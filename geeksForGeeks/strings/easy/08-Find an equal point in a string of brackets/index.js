let s1 = "(())))(";

let s2 = "))";

function findIndex(s = "") {
  let firstCounter = 0;

  let secondCounter = 0;

  let index = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      firstCounter++;
    } else {
      secondCounter++;
    }

    if (secondCounter - firstCounter === 1) {
      index = i;
      break;
    }
  }

  return index;
}

console.log(findIndex(s1));
console.log(findIndex(s2));
