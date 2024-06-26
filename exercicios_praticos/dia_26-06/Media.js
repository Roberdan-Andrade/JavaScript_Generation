const leia = require("readline-sync");

let nota1;
let nota2;
let nota3;
let nota4;

let media;

//Apresentação
console.log("\n---  Calculador de média simples  ---")
console.log("\nBom dia! Vamos começar? \n")

//Lendo notas
nota1 = leia.questionFloat("Digite a PRIMEIRA nota: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
nota2 = leia.questionFloat("Digite a SEGUNDA nota: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
nota3 = leia.questionFloat("Digite a TERCEIRA nota: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
nota4 = leia.questionFloat("Digite a QUARTA nota: ", {limitMessage: '\nErro, por favor digite apenas numeros'});

//Calculando média
media = (nota1 + nota2 + nota3 + nota4) / 4;

//Exibindo média simples e arredondada;
console.log("\nA média simples das notas inseridas é: " + media.toFixed(1));

media = Math.round(media);
console.log("Arredondando a média fica: " + media);

//Finalização
console.log("\nFim do programa");
