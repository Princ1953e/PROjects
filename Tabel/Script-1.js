let i = 1;
let num = 5;
let mul;

document.getElementById("Number").innerHTML = num;
while (i <= 10) {
  mul = num * i;

  let Princ = (document.getElementById(
    "table"
  ).innerHTML += `${num} * ${i} = ${mul} </br> </br>`);
  i++;
}
q;
