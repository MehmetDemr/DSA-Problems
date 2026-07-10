let s1 = "-123";

let s2 = "-999999999999";

let s3 = " 1231231231311133";

let s4 = " -0012gfg4";

let s5 = "   -";

function myAtoi(s = "") {
  s = s.trimStart();
  s = s.trimEnd();

  let newStr = "";

  let newNumber = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "0") {
      continue;
    } else if ((s[i] > "0" && s[i] <= "9") || s[i] === "-") {
      newStr += s[i];
    } else {
      break;
    }
  }

  newNumber = newStr;

  if (newNumber > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (newNumber < -(2 ** 31 - 1)) {
    return -(2 ** 31 - 1);
  } else if (newNumber === null || newNumber === "-") {
    return 0;
  } else {
    return newNumber;
  }
}

console.log(myAtoi(s1));
console.log(myAtoi(s2));
console.log(myAtoi(s3));
console.log(myAtoi(s4));
console.log(myAtoi(s5));
