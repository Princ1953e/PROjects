let N = 30;
document.querySelector("h2").innerHTML = `Number = ${N}`;

let Sum = 0;
let i = 1;

do {
  Sum += i;
  i++;
} while (i <= N);

let SUM = (document.querySelector(
  "span"
).innerHTML = `Number Of Sum IS = ${N}`);
