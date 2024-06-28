const leia = require("readline-sync");

let idade;
let idadeMaior = 0, idadeMenor = 0, totalPessoas = 0;

//Apresentação
console.log("\n ---  Leitor de idades  ---");
console.log("\nBom dia! Vamos começar? \n");

//lendo idade inicial
idade = leia.questionInt("Insira a primeira idade: ", { limitMessage: '\nErro, por favor digite apenas numeros' });

//Confere se é menor de 21 --> confere se é maior de 50 // Independente do resultado adiciona 1 ao total de pessoas
while(idade > 0){
    if(idade < 21){
        idadeMenor += 1;
        totalPessoas += 1;
    } else if (idade > 50){
        idadeMaior +=1;
        totalPessoas += 1;
    } else {
        totalPessoas += 1;
    }

    //Lendo proxima idade
    idade = leia.questionInt("Insira a proxima idade: ", { limitMessage: '\nErro, por favor digite apenas numeros' });

}

//Exibe resultados
console.log(`\nO numero total de pessoas é: ${totalPessoas}`);
console.log(`O numero total de pessoas menores de 21 anos é: ${idadeMenor}`);
console.log(`O numero total de pessoas maiores de 50 anos é: ${idadeMaior}`);

//finalização
console.log("\nFim do programa");
