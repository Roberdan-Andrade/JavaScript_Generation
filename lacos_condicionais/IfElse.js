const leia = require('readline-sync');

let nome;
let idade;

nome = leia.question("\nDigite seu nome:  ");
idade = leia.questionInt("\nDigite sua idade:  ");

if (idade >= 0 && idade <= 10) {
    console.log("\n" + nome + " Seu plano de saude custara R$100,00");
} else if (idade >= 11 && idade <= 29) {
    console.log("\n" + nome + " Seu plano de saude custara R$200,00");
} else if (idade >= 30 && idade <= 45) {
    console.log("\n" + nome + " Seu plano de saude custara R$300,00");
} else if (idade >= 46 && idade <= 59) {
    console.log("\n" + nome + " Seu plano de saude custara R$500,00");
} else if (idade >= 60 && idade <= 65) {
    console.log("\n" + nome + " Seu plano de saude custara R$600,00");
} else if (idade >= 66) {
    console.log("\n" + nome + " Seu plano de saude custara R$1000,00");
} else {
    console.log("Algo deu errado, tente novamente por favor");
}

if (nome.toLowerCase() == "lucas") {
    console.log("\n*** Recusar atendimento ***");
}

if (nome.toUpperCase() == "CAIO") {
    console.log("\n*** Recusar atendimento ***")
}
