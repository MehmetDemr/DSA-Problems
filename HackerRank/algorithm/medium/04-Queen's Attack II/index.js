let n1 = 5;

let k1 = 3;

let r_q = 4;

let c_q = 3;

let obstacles = [
  [5, 5],
  [4, 2],
  [2, 3],
];
function queensAttack(n = 0, k = 0, r_q = 0, c_q = 0, obstacles = []) {
  //without obstacles queens max movement
  let up = n - r_q;
  let down = r_q - 1;
  let right = n - c_q;
  let left = c_q - 1;

  let up_left = Math.min(up, left);
  let up_right = Math.min(up, right);
  let down_left = Math.min(down, left);
  let down_right = Math.min(down, right);

  // 2. Engelleri gezip mesafeleri güncelleme
  for (let obs of obstacles) {
    let r_o = obs[0];
    let c_o = obs[1];

    // Dikey ve Yatay Hizalamalar
    if (c_o === c_q && r_o > r_q) {
      up = Math.min(up, r_o - r_q - 1);
    } else if (c_o === c_q && r_o < r_q) {
      down = Math.min(down, r_q - r_o - 1);
    } else if (r_o === r_q && c_o > c_q) {
      right = Math.min(right, c_o - c_q - 1);
    } else if (r_o === r_q && c_o < c_q) {
      left = Math.min(left, c_q - c_o - 1);
    }

    // Çapraz Hizalamalar (Satır ve sütun farklarının mutlak değeri eşitse çaprazdadır!)
    else if (Math.abs(r_o - r_q) === Math.abs(c_o - c_q)) {
      if (r_o > r_q && c_o < c_q) {
        up_left = Math.min(up_left, r_o - r_q - 1);
      } else if (r_o > r_q && c_o > c_q) {
        up_right = Math.min(up_right, r_o - r_q - 1);
      } else if (r_o < r_q && c_o < c_q) {
        down_left = Math.min(down_left, r_q - r_o - 1);
      } else if (r_o < r_q && c_o > c_q) {
        down_right = Math.min(down_right, r_q - r_o - 1);
      }
    }
  }

  return up + down + right + left + up_left + up_right + down_left + down_right;
}

console.log(queensAttack(n1, k1, r_q, c_q, obstacles));
