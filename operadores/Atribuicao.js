const leia = require("readline-sync");

let quantidade;
let altura;

quantidade = leia.questionInt("Digite a quantidade");
console.log("O valor digitado foi: " + quantidade);

altura = leia.questionFloat("Digite a altura"), {limitMessage: 'Erro, digite um numero float'};
console.log("O Valor digitado foi: " + altura);
