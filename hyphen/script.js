let i;
let HH = "";

for (i = 1; i <= 10; i++) {
  HH += i;
  if (i < 10) {
    HH += "-";
  }
}
document.querySelector("h2").innerHTML = HH;
