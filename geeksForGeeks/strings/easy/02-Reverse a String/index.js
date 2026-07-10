let s1 = "GeeksforGeeks";

//easy way
function reverseString1(s = "") {
  return s.split("").reverse().join("");
}

//more complex way

function reverseString(s = "") {
  let newString = "";

  for (let i = s.length - 1; i >= 0; i--) {
    newString += s[i];
  }

  return newString;
}

console.log(reverseString(s1));
