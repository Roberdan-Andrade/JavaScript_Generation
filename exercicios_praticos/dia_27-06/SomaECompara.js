const leia = require("readline-sync");

let valor1, valor2, valor3;
let soma;

//Apresentação
console.log("\n---  Comparador pós soma  ---");
console.log("\nBom dia! Vamos começar? \n");

//Lendo valores
valor1 = leia.questionInt("Insira o primeiro valor a ser somado: ", {limitMessage: '\nErro, por favor digite apenas numeros'});
valor2 = leia.questionInt("Insira o segundo valor a ser somado: ", {limitMessage: '\nErro, por favor digite apenas numeros'});

valor3 = leia.questionInt("Insira o valor a ser comparado: ", {limitMessage: '\nErro, por favor digite apenas numeros'});

//Soma, compara e retorna
soma = valor1 + valor2;

if(soma < valor3){
    //Retorno caso menor
    console.log(`\nA soma de ${valor1} com ${valor2} é: ${soma}`);
    console.log(`O resultado da soma\(${soma}\) é menor que ${valor3}`);

    console.log(`\n\(${valor1} + ${valor2} = ${soma}\) < ${valor3}`)
} else if(soma == valor3){
    //Retorno caso igual
    console.log(`\nA soma de ${valor1} com ${valor2} é: ${soma}`);
    console.log(`O resultado da soma\(${soma}\) é igual a ${valor3}`);

    console.log(`\n\(${valor1} + ${valor2} = ${soma}\) = ${valor3}`)
} else if(soma > valor3){
    //Retorno caso maior
    console.log(`\nA soma de ${valor1} com ${valor2} é: ${soma}`);
    console.log(`O resultado da soma\(${soma}\) é maior que ${valor3}`);

    console.log(`\n\(${valor1} + ${valor2} = ${soma}\) > ${valor3}`)
}

//finalização
console.log("\nFim do programa");
