let n1 = 6;

let p1 = 2;

function pageCount(n = 0, p = 0) {
  const fromFront = Math.floor(p / 2);

  const fromBack = Math.floor(n / 2) - Math.floor(p / 2);

  return Math.min(fromFront, fromBack);
}

console.log(pageCount(n1, p1));
