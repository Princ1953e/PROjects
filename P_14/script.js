let i;
let j;
let con = "";
let num = 1;

for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    con += ` ${num} `;
    num++;
  }
  con += "</br>";
}

let loop = (document.getElementById("Loop").innerHTML = con);
