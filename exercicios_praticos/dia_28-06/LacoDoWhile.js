const leia = require("readline-sync");

let numeroDigitado;
let  somaPositiva = 0, somaNegativa = 0, somaTotal = 0;

//Apresentação
console.log("\n ---  Somador de positivos  ---");
console.log("\nBom dia! Vamos começar! \n");

//Le numero digitado --> Confere "Polaridade" ou se é 0 --> Adiciona aos contadores devidos ou informa encerramento das somas
do{
    numeroDigitado = leia.questionInt("Digite o numero a ser somado: ", { limitMessage: '\nErro, por favor digite apenas numeros' });

    if(numeroDigitado>0){
        somaPositiva += numeroDigitado;
        somaTotal += numeroDigitado;
    } else if(numeroDigitado<0){
        somaNegativa += numeroDigitado;
        somaTotal += numeroDigitado;
    } else{
        console.log("\nNumero digitado 0, Veja os resultados: ");
    }
}while(numeroDigitado != 0);

//Exibe resultados das somas
console.log(`\nA soma de todos os numeros positivos é: ${somaPositiva}`);
console.log(`A soma de todos os numeros negativos é: ${somaNegativa}`);
console.log(`A soma de todos os numeros é: ${somaTotal}`);
