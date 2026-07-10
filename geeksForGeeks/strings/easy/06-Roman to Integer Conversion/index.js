let s1 = "IX";

let s2 = "XL";

let s3 = "MCMIV";

function value(str = "") {
  if (str === "I") return 1;
  if (str === "V") return 5;
  if (str === "X") return 10;
  if (str === "L") return 50;
  if (str === "C") return 100;
  if (str === "D") return 500;
  if (str === "M") return 1000;
}

function romanToDecimal(s = "") {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (value(s[i]) >= value(s[i + 1]) || s[i + 1] === undefined) {
      result += value(s[i]);
    } else {
      result -= value(s[i]);
    }
  }

  return result;
}

console.log(romanToDecimal(s1));
console.log(romanToDecimal(s2));
console.log(romanToDecimal(s3));
