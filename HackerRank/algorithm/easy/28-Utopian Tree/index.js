let n1 = 5;

function utopianTree(n = 0) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
      result = result * 2;
    } else {
      result++;
    }
  }

  return result;
}

console.log(utopianTree(n1));
