let bill1 = [3, 10, 2, 9];

let k1 = 1;

let b1 = 12;

let bill2 = [3, 10, 2, 9];

let k2 = 1;

let b2 = 7;

function bonAppetit(bill = [], k = 0, b = 0) {
  let totalBill = 0;

  let splittedBill = 0;

  for (let i = 0; i < bill.length; i++) {
    totalBill += bill[i];
  }

  splittedBill = (totalBill - bill[k]) / 2;

  if (splittedBill - b !== 0) {
    return Math.abs(splittedBill - b);
  } else {
    return "Bon Appetit";
  }
}

console.log(bonAppetit(bill1, k1, b1));
console.log(bonAppetit(bill2, k2, b2));
