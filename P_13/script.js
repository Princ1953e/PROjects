let con = "";
let i;
let j;
let loop = document.getElementById("Loop");

for (i = 5; i >= 1; i--) {
  for (j = 5; j >= i; j--) {
    con += j;
  }
  con += "</br>";
}
console.log("", j);
loop.innerHTML = con;
