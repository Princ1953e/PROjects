let num = 175;
let rem;
let sum = 0;
let C = num;
let c = 1;
let p = 1;

while (C != 0) {
  rem = C % 10;
  sum = sum * 10 + rem;
  C = C / 10;
}
C = sum;
sum = 0;

while (C != 0) {
  rem = C % 10;
  for (let i = 1; i <= C; i++) {
    p = p * rem;
  }
  sum = sum + p;
  C = C / 10;
  c++;
  p = 1;
}
if ((sum = num)) {
  console.log("Dis");
} else {
  console.log("Not Dis");
}
