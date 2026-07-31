let i1 = 20;

let j1 = 23;

let k1 = 6;

function beautifulDays(i = 0, j = 0, k = 0) {
  let counter = 0;

  let tempStr = "";

  let tempNumber = 0;

  for (let m = i; m <= j; m++) {
    tempStr = m.toString();
    tempStr = tempStr.split("").reverse().join("");

    tempNumber = Number(tempStr);

    if (Math.abs((m - tempNumber) % k) === 0) {
      counter++;
    }
  }

  return counter;
}

console.log(beautifulDays(i1, j1, k1));
