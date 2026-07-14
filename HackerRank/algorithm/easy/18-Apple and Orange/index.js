let s1 = 7;

let t1 = 11;

let a1 = 5;

let b1 = 15;

let apples1 = [-2, 2, 1];

let oranges1 = [5, -6];

function countApplesAndOranges(
  s = 0,
  t = 0,
  a = 0,
  b = 0,
  apples = [],
  oranges = [],
) {
  let appleCounter = 0;

  let orangeCounter = 0;

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      appleCounter++;
    }
  }

  for (let j = 0; j < oranges.length; j++) {
    if (oranges[j] + b >= s && oranges[j] + b <= t) {
      orangeCounter++;
    }
  }

  return `${appleCounter} ${orangeCounter}`;
}

console.log(countApplesAndOranges(s1, t1, a1, b1, apples1, oranges1));
