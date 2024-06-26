let x = 10;
let y = 5;
let z = 2;

let numero = 42
let letra = "42"

let resp;

//Maior que
resp = x > y;
console.log(resp);

//Maior ou igual que
resp = y >= z;
console.log(resp);

//Maior que, mas de resultado falso e mais organizado
resp = (z > x);
console.log(resp);

console.log("");

//Igual mas sem testagem de tipagem
resp = (numero == letra);
console.log(resp);

//Igual mas com testagem de tipagem
resp = (numero === letra);
console.log(resp);

console.log("");

//Diferente de
resp = (x != y);
console.log (resp);
