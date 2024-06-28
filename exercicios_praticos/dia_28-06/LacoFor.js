const leia = require("readline-sync");

let numero1, numero2;

//Apresentação
console.log("\n ---  Multiplos em intervalo  ---");
console.log("\nBom dia! Vamos começar? \n");

//Lendo entradas
numero1 = leia.questionInt("Digite o PRIMEIRO numero do intervalo: ", { limitMessage: '\nErro, por favor digite apenas numeros' });
numero2 = leia.questionInt("Digite o ULTIMO numero do intervalo: ", { limitMessage: '\nErro, por favor digite apenas numeros' });

//Teste de intervalo valido
if (numero1 >= numero2) {
    console.log("Intervalo invalido!");
} else {
    //Confere se é multiplo e exibe
    for (numero1; numero1 <= numero2; numero1++) {
        if (numero1 % 3 == 0 && numero1 % 5 == 0) {
            console.log(`${numero1} é multiplo de 3 e 5`)
        }
    }
}

//finalização
console.log("\nFim do programa");
