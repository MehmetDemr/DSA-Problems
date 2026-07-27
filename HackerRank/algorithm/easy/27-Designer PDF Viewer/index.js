let h1 = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 1, 1, 5, 2, 5, 5, 5, 5, 5, 5];
let word1 = "torn";

const alphabet = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
};

function designerPdfViewer(h = [], word = "") {
  let n = word.length;

  let temp = 0;

  for (let i = 0; i < word.length; i++) {
    let tempWord = "";

    tempWord = word[i];

    if (h[alphabet[tempWord]] > temp) {
      temp = h[alphabet[tempWord]];
    }
  }

  return temp * n;
}

console.log(designerPdfViewer(h1, word1));
