let x1 = 2; //CAT A

let y1 = 5; //CAT B

let z1 = 4; //MOUSE C

function catAndMouse(x = 0, y = 0, z = 0) {
  if (Math.abs(x - z) > Math.abs(y - z)) {
    return "Cat B";
  } else if (Math.abs(x - z) < Math.abs(y - z)) {
    return "Cat A";
  } else {
    return "Mouse C";
  }
}

console.log(catAndMouse(x1, y1, z1));
