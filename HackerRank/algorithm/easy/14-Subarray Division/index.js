let s1 = [2, 2, 1, 3, 2];

let m1 = 2;

let d1 = 4;

function birthday(s = [], d = 0, m = 0) {
  let counter = 0;

  for (let i = 0; i <= s.length - m; i++) {
    let currentSum = 0;

    for (let j = 0; j < m; j++) {
      currentSum += s[i + j];
    }

    if (currentSum === d) {
      counter++;
    }
  }

  return counter;
}

console.log(birthday(s1, d1, m1));
