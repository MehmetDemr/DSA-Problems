let k1 = 1;

let height1 = [1, 2, 3, 3, 2];

function hurdleRace(k = 0, height = []) {
  let temp = 0;

  for (let i = 0; i < height.length; i++) {
    if (height[i] - k > temp) {
      temp = height[i] - k;
    }
  }

  if (temp < 0) {
    return 0;
  }

  return temp;
}

console.log(hurdleRace(k1, height1));
