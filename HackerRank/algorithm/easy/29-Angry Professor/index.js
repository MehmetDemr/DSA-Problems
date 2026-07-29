let k1 = 3;

let a1 = [-2, -1, 0, 1, 2];

function angryProfessor(k = 0, a = []) {
  let temp = 0;

  let str = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) {
      temp++;
    }
  }

  if (temp >= k) {
    str = "NO";
  } else {
    str = "YES";
  }

  return str;
}

console.log(angryProfessor(k1, a1));
