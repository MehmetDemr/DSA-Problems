let s1 = "geeksforgeeks";

let s2 = "racecar";

let s3 = "aabbccc";

function nonRep(s = "") {
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    let counter = 0;

    for (let j = 0; j < s.length; j++) {
      if (i === j) {
        continue;
      }
      if (s[i] === s[j]) {
        counter++;
        break;
      }
    }

    if (counter === 0) {
      temp += s[i];
      break;
    }
  }

  if (temp === "") {
    temp = "$";
  }

  return temp;
}

console.log(nonRep(s1));

console.log(nonRep(s2));

console.log(nonRep(s3));
