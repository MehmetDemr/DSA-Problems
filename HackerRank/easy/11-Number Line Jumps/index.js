let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

// let x1 = 2;
// let v1 = 1;
// let x2 = 1;
// let v2 = 2;

function kangaroo(x1, v1, x2, v2) {
  let str = "NO";
  let firstResult = 0;
  let secondResult = 0;

  for (let i = 1; i < 10000 * 10000; i++) {
    firstResult = 0;
    secondResult = 0;

    firstResult = x1 + v1 * i;
    secondResult = x2 + v2 * i;

    if (firstResult === secondResult) {
      str = "YES";
    }
  }

  return str;
}

console.log(kangaroo(x1, v1, x2, v2));
