let p1 = [2, 3, 1];

function permutationEquation(p = []) {
  let arr = [];

  for (let i = 1; i <= p.length; i++) {
    let temp = 0;

    for (let j = 0; j < p.length; j++) {
      if (p[j] === i) {
        temp = j + 1;
        break;
      }
    }

    for (let k = 0; k < p.length; k++) {
      if (p[k] === temp) {
        arr.push(k + 1);
        break;
      }
    }
  }

  return arr;
}

//optimized

// function permutationEquation(p = []) {
//   // pos[val] = val değerinin p içindeki 1-based indeksi
//   let pos = [];

//   for (let i = 0; i < p.length; i++) {
//     pos[p[i]] = i + 1;
//   }

//   let result = [];

//   for (let x = 1; x <= p.length; x++) {
//     // p[p[y]] = x  ==>  p[y] = pos[x]  ==>  y = pos[pos[x]]
//     result.push(pos[pos[x]]);
//   }

//   return result;
// }

console.log(permutationEquation(p1));
