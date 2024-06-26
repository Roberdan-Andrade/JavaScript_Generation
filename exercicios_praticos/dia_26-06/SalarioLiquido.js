const leia = require("readline-sync");

let salarioBruto;
let adicionalNoturno;
let horasExtrasFeitas;
let horasExtrasValor;
let desconto;

let salarioLiquido;

//Apresentação
console.log("\n---  Calculador de salario liquido  ---")
console.log("\nBom dia! Vamos começar? \n")

//Lendo entradas
salarioBruto = leia.questionFloat("Digite o salario bruto: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
adicionalNoturno = leia.questionFloat("Digite o adicional noturno: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
horasExtrasValor = leia.questionFloat("Digite o valor ganho por horas extras: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
horasExtrasFeitas = leia.questionFloat("Digite a Quantidade de horas extras feitas: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
desconto = leia.questionFloat("Digite o valor a ser descontado: ", {limitMessage: '\nErro, por favor digite apenas numeros'});

//Calculando salario liquido
salarioLiquido = (salarioBruto + adicionalNoturno + (horasExtrasValor * horasExtrasFeitas)) - desconto;

//Exibindo salario liquido e finalização
console.log("\nO salario liquido desse mês é: " + salarioLiquido);
console.log("\nFim do programa");
