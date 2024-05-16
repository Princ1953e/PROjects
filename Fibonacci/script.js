let N = 100;
let A = 0;
let B = 1;

let F = A + B;

document.querySelector("h1").innerHTML += `${A} `;

while (F < N) {
  document.querySelector("h1").innerHTML += ` ${F}`;
  F = A + B;
  A = B;
  B = F;
}
