const leia = require("readline-sync");

let valor1;
let valor2;
let valor3;
let valor4;

let produto1;
let produto2;

let diferença;

//Apresentação
console.log("\n---  Calculador de diferença entre produtos  ---")
console.log("\nBom dia! Vamos começar? \n")

//Lendo valores
valor1 = leia.questionFloat("Digite o PRIMEIRO valor: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
valor2 = leia.questionFloat("Digite a SEGUNDO valor: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
valor3 = leia.questionFloat("Digite a TERCEIRO valor: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
valor4 = leia.questionFloat("Digite a QUARTO valor: ", {limitMessage: '\nErro, por favor digite apenas numeros'});

//Calculando produtos e diferença
produto1 = valor1 * valor2;
produto2 = valor3 * valor4;

diferença = produto1 - produto2;

//Exibindo resultados e finalização
console.log("");

console.log("O produto do primeiro valor com o segundo é: " + produto1);
console.log("O produto do terceiro valor com o quarto é: " + produto2);

console.log("A diferença entre os produtos são de: " + diferença);

console.log("\nFim do programa");
