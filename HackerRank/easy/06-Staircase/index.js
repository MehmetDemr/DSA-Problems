let input = 6;

function staircase(n) {
  let str = "";

  for (let i = 1; i <= n; i++) {
    str += " ".repeat(n - i) + "#".repeat(i) + "\n";
  }

  return str;
}

console.log(staircase(input));
