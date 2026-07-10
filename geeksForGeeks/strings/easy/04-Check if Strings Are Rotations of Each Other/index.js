let s1 = "abcd";

let s1Rotated = "cdab";

let s2 = "aab";

let s2Rotated = "aba";

let s3 = "abcd";

let s3Rotated = "acbd";

function areRotations(s1 = "", s2 = "") {
  let temp = 0;

  let bool = true;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s1[i + 1] && s1[i] === s2[0]) {
      temp = i;
      break;
    }
  }

  for (let j = 0; j < s1.length; j++) {
    if (s1[(temp + j) % s1.length] === s2[j]) {
      continue;
    } else {
      bool = false;
    }
  }

  return bool;
}

//more efficient way

function areRotations1(s1 = "", s2 = "") {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}

console.log(areRotations(s1, s1Rotated));

console.log(areRotations(s2, s2Rotated));

console.log(areRotations(s3, s3Rotated));
