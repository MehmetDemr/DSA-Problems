let a1 = [1, 2, 2, 3, 1, 2];

function pickingNumbers(a = []) {
  let counter = 0;

  let temp = 0;

  a = a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    if (temp > counter) {
      counter = temp;
    }
    temp = 0;
    for (let j = 0; j < a.length; j++) {
      if (a[i] + 1 === a[j] || a[i] === a[j]) {
        temp++;
      }
    }
  }

  return counter;
}

console.log(pickingNumbers(a1));
