unit = 178;
let amount = 80;
for (i = 1; i <= unit; i++) {
  if (i <= 50) {
    amount += 3;
  }
  else if (i <= 150) {
    amount += 5
  }
  else {
    amount += 10;
  }
}
console.log(amount);