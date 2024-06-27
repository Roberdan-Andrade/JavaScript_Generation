const leia = require('readline-sync');

let nome;
let codigoIdade;

nome = leia.question("\nDigite seu nome:  ");

console.log("\n--- Faixas Etárias ---")
console.log("\n 1 -- De 0 a 10 anos ");
console.log(" 2 -- De 11 a 29 anos ");
console.log(" 3 -- De 30 a 45 anos ");
console.log(" 4 -- De 46 a 59 anos");
console.log(" 5 -- De 60 a 65 anos ");
console.log(" 6 -- Acima de 65 anos ");

codigoIdade = leia.questionInt("\nDigite o codigo correspondente a sua idade:  ");

switch(codigoIdade){
    case 1:
        console.log("\n" + nome + " Seu plano de saude custara R$100,00");
        break;
    case 2:
        console.log("\n" + nome + " Seu plano de saude custara R$200,00");
        break;
    case 3:
        console.log("\n" + nome + " Seu plano de saude custara R$300,00");
        break;
    case 4:
        console.log("\n" + nome + " Seu plano de saude custara R$500,00");
        break;
    case 5:
        console.log("\n" + nome + " Seu plano de saude custara R$600,00");
        break;
    case 6:
        console.log("\n" + nome + " Seu plano de saude custara R$1000,00");
        break;
    default:
        console.log("Digite um codigo valido!");
}
