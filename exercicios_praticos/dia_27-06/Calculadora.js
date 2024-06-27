const leia = require("readline-sync");

let valor1, valor2, operacao, resultado;

//Apresentação
console.log("\n ---  Calculadora  ---");
console.log("\nBom dia! Vamos começar? \n");

//Le valores
valor1 = leia.questionFloat("Entre o primeiro valor: " ,{limitMessage: '\nErro, por favor digite apenas numeros'});
valor2 = leia.questionFloat("Entre o segundo valor: " ,{limitMessage: '\nErro, por favor digite apenas numeros'});

//Motra tabela
console.log("\nQual operação deve ser feita usando esses valores?")
console.log(`Primeiro valor: ${valor1} -- Segundo valor: ${valor2}`)

console.log("\n Codigo -- Operação")
console.log("\n   1 -- Soma");
console.log("   2 -- Subtração");
console.log("   3 -- Multuplicação");
console.log("   4 -- Divisão");


//Le codigo
operacao = leia.questionInt("Digite o codigo da operacao desejada: ");

//Faz operação --> exibe resultado
switch(operacao){
    case 1:
        resultado = valor1 + valor2;
        console.log(`\n${valor1} + ${valor2} = ${resultado}`);
        break;
    case 2:
        resultado = valor1 - valor2;
        console.log(`\n${valor1} - ${valor2} = ${resultado}`);
        break;
    case 3:
        resultado = valor1 * valor2;
        console.log(`\n${valor1} * ${valor2} = ${resultado}`);
        break;
    case 4:
        resultado = valor1 / valor2;
        console.log(`\n${valor1} / ${valor2} = ${resultado}`);
        break;
    default:
        console.log("Digite um codigo valido!");
}

//finalização
console.log("\nFim do programa");
