let N = 23;
let S = 0;
let T = N;
let Y = "Your Enter Number Is An Armstrong Number";
let NO = "Your Enter Number Is Not An Armstrong Number";
while (T > 0) {
  let M = T % 10;
  S += M ** 3;
  T = parseInt(T / 10);
}
document.getElementById("N").innerHTML = N;

if (S == N) {
  document.querySelector("h2").innerHTML = Y;
} else {
  document.querySelector("h2").innerHTML = NO;
}
