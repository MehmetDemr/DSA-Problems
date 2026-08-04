let n1 = 5;
let m1 = 2;
let s1 = 1;

function saveThePrisoner(n = 0, m = 0, s = 0) {
  let counter = s;

  for (let i = 1; i < m; i++) {
    if (counter >= n) {
      counter = 1;
    } else {
      counter++;
    }
  }
  return counter;
}

//optimized

function saveThePrisoner(n = 0, m = 0, s = 0) {
  let result = (s + m - 1) % n;

  return result === 0 ? n : result;
}

console.log(saveThePrisoner(n1, m1, s1));
