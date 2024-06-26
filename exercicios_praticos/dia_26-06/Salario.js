const leia = require("readline-sync");

let salario;
let abono;
let resultado;

//Apresentação
console.log("\n---  Calculador de salário + abono  ---")
console.log("\nBom dia! Vamos começar? \n")

//Lendo salario e abono
salario = leia.questionFloat("Digite o salario  ", {limitMessage: '\nErro, por favor digite apenas numeros'});
abono = leia.questionFloat("Digite o abono  ", {limitMessage: '\nErro, por favor digite apenas numeros'});

//Calculando resultado
resultado = salario + abono;

//Exibindo resultado e finalização
console.log("\nA soma do salário e abono é de: " + resultado);
console.log("\nFim do programa");
