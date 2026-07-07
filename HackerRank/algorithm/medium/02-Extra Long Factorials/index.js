let n = 25;

function extraLongFactorials(n = 0) {
  let result = 1n;

  for (let i = BigInt(n); i > 0n; i--) {
    result *= i;
  }

  return result;
}

console.log(extraLongFactorials(n).toString());
