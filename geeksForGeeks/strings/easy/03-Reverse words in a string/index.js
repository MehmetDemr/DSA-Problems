let s1 = "...home......";

let s2 = "i.like.this.program.very.much";

let s3 = "..geeks..for.geeks.";

function reverseWords(s = "") {
  let words = [];

  let newString = "";

  words = s.split(".");

  for (let i = words.length - 1; i >= 0; i--) {
    if (words[i] === "") {
      continue;
    }
    newString += words[i] + ".";
  }

  return newString.slice(0, newString.length - 1);
}

console.log(reverseWords(s1));
console.log(reverseWords(s2));
console.log(reverseWords(s3));
