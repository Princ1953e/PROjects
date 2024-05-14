let Num = 4;
let i = 1;
let fact = 1;

while (i <= Num) {
  fact = fact * i;
  i++;

  console.log("Fact Is ", fact);
  document.getElementById("F").innerHTML = Num;
  document.getElementById("N").innerHTML = fact;
}
