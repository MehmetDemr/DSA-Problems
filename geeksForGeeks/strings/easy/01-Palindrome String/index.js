let str1 = "abba";

let str2 = "abc";

//easy way
function isPalindrome1(s = "") {
  let reversedStr = s.split("").reverse().join("");

  if (reversedStr === s) {
    return true;
  } else {
    return false;
  }
}

//more complex way
function isPalindrome(s = "") {
  let bool = true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      bool = false;
    }
  }

  return bool;
}

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
