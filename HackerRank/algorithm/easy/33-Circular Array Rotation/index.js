let a1 = [3, 4, 5];

let k1 = 2;

let queries1 = [1, 2];

function circularArrayRotation(a = [], k = 0, queries = []) {
  const n = a.length;
  const newArray = new Array(n);

  for (let i = 0; i < n; i++) {
    const newIndex = (i + k) % n;
    newArray[newIndex] = a[i];
  }

  const result = [];
  for (let j = 0; j < queries.length; j++) {
    const targetIndex = queries[j];
    result.push(newArray[targetIndex]);
  }

  return result;
}

console.log(circularArrayRotation(a1, k1, queries1));
