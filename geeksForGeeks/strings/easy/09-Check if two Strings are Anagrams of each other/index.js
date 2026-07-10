let s1 = "geeks";

let s1Anagram = "kseeg";

let s2 = "allergy";

let s2Anagram = "allergyy";

let s3 = "listen";

let s3Anagram = "lists";

function areAnagrams(s1 = "", s2 = "") {
  s1 = s1.split("").sort().join("");

  s2 = s2.split("").sort().join("");

  return s1 === s2;
}

console.log(areAnagrams(s1, s1Anagram));
console.log(areAnagrams(s2, s2Anagram));
console.log(areAnagrams(s3, s3Anagram));
