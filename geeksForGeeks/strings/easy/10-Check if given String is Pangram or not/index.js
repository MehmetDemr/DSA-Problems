let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let s1 = "The quick brown fox jumps over the lazy dog";

let s2 = "The quick brown fox jumps over the dog";

function checkPangram(s = "") {
  let isPanagram = true;

  for (let i = 0; i < alphabet.length; i++) {
    if (!s.includes(alphabet[i])) {
      isPanagram = false;
    }

    return isPanagram;
  }
}

console.log(checkPangram(s1));
console.log(checkPangram(s2));
