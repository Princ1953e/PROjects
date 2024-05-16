let SUM = 0;
let i = 1;

for (i = 1; i <= 10; i++) {
  document.querySelector("h2").innerHTML += ` ${i} * ${i} = ${i * i} </br>`;
  SUM += i * i;
}
document.querySelector("h4").innerHTML += SUM;
