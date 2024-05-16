let R = 0;
let N = 139;
let T = N;
let P = document.querySelector("h2");

while (T > 0) {
  let RD = T % 10;
  R = R * 10 + RD;
  T = parseInt(T / 10);
}
if (N == R) {
  P.innerHTML = `${N}Number Is a Palindrome `;
} else {
  P.innerHTML = `${N}Number Is Not a Palindrome `;
}
