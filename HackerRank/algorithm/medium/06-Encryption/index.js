let s1 = "haveaniceday";

function encryption(s = "") {
  s = s.split(" ").join("");

  let n = s.length;

  let str = "";

  let root = Math.ceil(Math.sqrt(n));

  for (let i = 0; i < root; i++) {
    str += " ";

    for (let j = i; j < n; j += root) {
      str += s[j];
    }
  }

  return str.trim();
}

console.log(encryption(s1));
